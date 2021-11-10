using ChatBot.Common.BASEINFO;
using MongoDB.Bson;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace ChatBot.Common.ENTITIES
{
    [BsonCollection("questionanswer")]
    public class QuestionAnswerInfo : Document
    {
        [JsonProperty("Questions")]
        public List<QuestionLst> Questions { get; set; }
        public QuestionAnswerInfo()
        {
            Id = ObjectId.GenerateNewId().ToString();
        }
    }
    public class QuestionLst
    {

        [JsonProperty("id")]
        public int id { get; set; }
        [JsonProperty("mtype")]
        public string mtype { get; set; }
        [JsonProperty("dmessage")]
        public string dmessage { get; set; }
        [JsonProperty("message")]
        public string message { get; set; }
        [JsonProperty("input", NullValueHandling = NullValueHandling.Ignore)]
        public List<InputFormatInfo> input { get; set; }
        
        [JsonProperty("buttons", NullValueHandling = NullValueHandling.Ignore)]
        public List<ButtonInfo> buttons { get; set; }
        [JsonProperty("cards", NullValueHandling = NullValueHandling.Ignore)]
        public List<CardItem> cards { get; set; }
        [JsonProperty("conditions", NullValueHandling = NullValueHandling.Ignore)]
        public List<ConditionInfo> conditions { get; set; }


    }
    public class ButtonInfo
    {
        [JsonProperty("text")]
        public string text { get; set; }
        [JsonProperty("click")]
        public string click { get; set; }
    }
    public class CardItem
    {
        [JsonProperty("items")]
        public List<CardItemInfo> items { get; set; }
        [JsonProperty("click")]
        public string click { get; set; }
    }
    public class CardItemInfo
    {
        [JsonProperty("name")]
        public string name { get; set; }
    }
    public class ConditionInfo
    {
        [JsonProperty("qcondition")]
        public string qcondition { get; set; }

        [JsonProperty("istrue")]
        public string istrue { get; set; }
        [JsonProperty("isfalse")]
        public string isfalse { get; set; }
    }
    public class InputFormatInfo
    {
        [JsonProperty("format")]
        public string format { get; set; }
        [JsonProperty("min")]
        public int min { get; set; }
        [JsonProperty("max")]
        public int max { get; set; }
        [JsonProperty("click")]
        public string click { get; set; }
    }
    
}
