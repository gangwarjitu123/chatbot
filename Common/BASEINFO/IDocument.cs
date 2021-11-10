using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace ChatBot.Common.BASEINFO
{
    public interface IDocument
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        string Id { get; set; }

        DateTime CreatedAt { get; }
    }
    public interface IEntity<out TKey>
    {
        string Id { get; }
    }
}
