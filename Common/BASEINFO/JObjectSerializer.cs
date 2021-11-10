using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Serializers;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatBot.Common.BASEINFO
{
    public class JObjectSerializer : SerializerBase<JObject> // IBsonSerializer<JObject>
    {
        public override JObject Deserialize(BsonDeserializationContext context, BsonDeserializationArgs args)
        {
            var myBSONDoc = BsonDocumentSerializer.Instance.Deserialize(context);
            return JObject.Parse(myBSONDoc.ToString());
        }

        public override void Serialize(BsonSerializationContext context, BsonSerializationArgs args, JObject value)
        {
            var myBSONDoc = MongoDB.Bson.BsonDocument.Parse(value.ToString());
            BsonDocumentSerializer.Instance.Serialize(context, myBSONDoc);
        }
    }
}
