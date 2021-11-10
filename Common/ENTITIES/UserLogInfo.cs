using ChatBot.Common.BASEINFO;
using MongoDB.Bson;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatBot.Common.ENTITIES
{
    [BsonCollection("chatlog")]
    public class UserLogInfo: Document
    {
        [JsonProperty("Question")]
        public string Question { get; set; }
        [JsonProperty("Answer")]
        public string Answer { get; set; }
        [JsonProperty("DataVariableName")]
        public string DataVariableName { get; set; }
        [JsonProperty("DataVariableValue")]
        public string DataVariableValue { get; set; }
        [JsonProperty("UserToken")]
        public string UserToken { get; set; }
        public UserLogInfo()
        {
            Id = ObjectId.GenerateNewId().ToString();
        }
    }
}
