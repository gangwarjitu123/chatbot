using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using ChatBot.Common.BASEINFO;
using ChatBot.Infrastructure.MongoSetting;
using MongoDB.Bson;
using MongoDB.Driver;

namespace ChatBot.Repository
{
    public class MongoRepository<TDocument> : IMongoRepository<TDocument>
    where TDocument : IDocument
    {
        private readonly IMongoCollection<TDocument> _collection;

        public MongoRepository(IMongoDbSettings settings)
        {
            var database = new MongoClient(settings.ConnectionString).GetDatabase(settings.DatabaseName);
            _collection = database.GetCollection<TDocument>(GetCollectionName(typeof(TDocument)));
        }

        private protected string GetCollectionName(Type documentType)
        {
            return ((BsonCollectionAttribute)documentType.GetCustomAttributes(
                    typeof(BsonCollectionAttribute),
                    true)
                .FirstOrDefault())?.CollectionName;
        }
        
        public virtual IQueryable<TDocument> AsQueryable()
        {
            
            return _collection.AsQueryable();
        }
        public virtual long GetCount(Expression<Func<TDocument, bool>> filterExpression)
        {
            return _collection.Find(filterExpression).CountDocuments();
        }
        public async Task<long> GetCountAsync(Expression<Func<TDocument, bool>> filterExpression)
        {
            return await _collection.Find(filterExpression).CountDocumentsAsync();
        }
        public virtual Task<bool> IsExistsAsync(Expression<Func<TDocument, bool>> filterExpression)
        {
            return Task.Run(() => _collection.Find(filterExpression).AnyAsync());
        }
        public virtual bool IsExists(Expression<Func<TDocument, bool>> filterExpression)
        {
            return _collection.Find(filterExpression).Any();
        }
        public virtual IEnumerable<TDocument> FilterBy(
            Expression<Func<TDocument, bool>> filterExpression)
        {
            return _collection.Find(filterExpression).ToEnumerable();
        }

        public virtual IEnumerable<TProjected> FilterBy<TProjected>(
            Expression<Func<TDocument, bool>> filterExpression,
            Expression<Func<TDocument, TProjected>> projectionExpression)
        {
            return _collection.Find(filterExpression).Project(projectionExpression).ToEnumerable();
        }
        public async Task<IEnumerable<TDocument>> GetAllAsync(Expression<Func<TDocument, bool>> filterExpression, Expression<Func<TDocument, object>> sort)
        {
            return await _collection.Find(filterExpression).SortByDescending(sort).ToListAsync();
        }
        public  async Task<object> GetPagerResultAsync(int page, int pageSize, Expression<Func<TDocument, bool>> filterExpression, Expression<Func<TDocument, object>> sort,string sortorder)
        {
            // count facet, aggregation stage of count
            var countFacet = AggregateFacet.Create("countFacet",
                PipelineDefinition<TDocument, AggregateCountResult>.Create(new[]
                {
                PipelineStageDefinitionBuilder.Count<TDocument>()
                }));

            // data facet, we’ll use this to sort the data and do the skip and limiting of the results for the paging.
            var dataFacet = AggregateFacet.Create("dataFacet",
                PipelineDefinition<TDocument, TDocument>.Create(new[]
                {
                sortorder=="asc"?PipelineStageDefinitionBuilder.Sort(Builders<TDocument>.Sort.Ascending(sort)) :PipelineStageDefinitionBuilder.Sort(Builders<TDocument>.Sort.Descending(sort)),
                PipelineStageDefinitionBuilder.Skip<TDocument>((page - 1) * pageSize),
                PipelineStageDefinitionBuilder.Limit<TDocument>(pageSize),
                }));

            //var filter = Builders<TDocument>.Filter.Empty;
            
             var aggregation = await _collection.Aggregate()
                .Match(filterExpression)
                .Facet(countFacet, dataFacet)
                .ToListAsync();

            var count = aggregation.First()
                .Facets.First(x => x.Name == "countFacet")
                .Output<AggregateCountResult>()
                ?.FirstOrDefault()
                ?.Count ?? 0;

            var data = aggregation.First()
                .Facets.First(x => x.Name == "dataFacet")
                .Output<TDocument>();
            object Result = new
            {
                //Count = (int)count / pageSize,
                Count = (int)count,
                Size = pageSize,
                Page = page,
                Items = data
            };
            return  Result;
        }
        public virtual TDocument FindOne(Expression<Func<TDocument, bool>> filterExpression)
        {
            
            return _collection.Find(filterExpression).FirstOrDefault();
        }

        public virtual Task<TDocument> FindOneAsync(Expression<Func<TDocument, bool>> filterExpression)
        {
            return Task.Run(() => _collection.Find(filterExpression).FirstOrDefaultAsync());
        }

        public virtual TDocument FindById(string id)
        {
            var objectId = new ObjectId(id);
            var filter = Builders<TDocument>.Filter.Eq(doc => doc.Id, id);
            return _collection.Find(filter).SingleOrDefault();
        }

        public virtual Task<TDocument> FindByIdAsync(string id)
        {
            return Task.Run(() =>
            {
                var objectId = new ObjectId(id);
                var filter = Builders<TDocument>.Filter.Eq(doc => doc.Id, id);
                return _collection.Find(filter).SingleOrDefaultAsync();
            });
        }


        public virtual void InsertOne(TDocument document)
        {
            _collection.InsertOne(document);
        }

        public virtual Task InsertOneAsync(TDocument document)
        {
            return Task.Run(() => _collection.InsertOneAsync(document));
        }

        public void InsertMany(ICollection<TDocument> documents)
        {
            _collection.InsertMany(documents);
        }


        public virtual async Task InsertManyAsync(ICollection<TDocument> documents)
        {
            await _collection.InsertManyAsync(documents);
        }

        public void ReplaceOne(TDocument document)
        {
            var filter = Builders<TDocument>.Filter.Eq(doc => doc.Id, document.Id);
            _collection.FindOneAndReplace(filter, document);
        }

        public virtual async Task ReplaceOneAsync(TDocument document)
        {
            var filter = Builders<TDocument>.Filter.Eq(doc => doc.Id, document.Id);
            await _collection.FindOneAndReplaceAsync(filter, document);
        }

        public void DeleteOne(Expression<Func<TDocument, bool>> filterExpression)
        {
            _collection.FindOneAndDelete(filterExpression);
        }

        public Task DeleteOneAsync(Expression<Func<TDocument, bool>> filterExpression)
        {
            return Task.Run(() => _collection.FindOneAndDeleteAsync(filterExpression));
        }

        public void DeleteById(string id)
        {
            var objectId = new ObjectId(id);
            var filter = Builders<TDocument>.Filter.Eq(doc => doc.Id, id);
            _collection.FindOneAndDelete(filter);
        }

        public Task DeleteByIdAsync(string id)
        {
            return Task.Run(() =>
            {
                var objectId = new ObjectId(id);
                var filter = Builders<TDocument>.Filter.Eq(doc => doc.Id, id);
                _collection.FindOneAndDeleteAsync(filter);
            });
        }

        public void DeleteMany(Expression<Func<TDocument, bool>> filterExpression)
        {
            _collection.DeleteMany(filterExpression);
        }

        public Task DeleteManyAsync(Expression<Func<TDocument, bool>> filterExpression)
        {
            return Task.Run(() => _collection.DeleteManyAsync(filterExpression));
        }
    }
}
