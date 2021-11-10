using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatBot.Common.BASEINFO
{
    public abstract class Document : IDocument
    {
        public string Id { get; set; }

        [BsonDateTimeOptions]
        public DateTime CreatedAt => CommonHelper.IndianStandard(DateTime.UtcNow);
    }
}
