using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;

namespace ChatBot.Common
{
    public static class CommonHelper
    {
        public static DateTime IndianStandard(DateTime currentDate)
        {
            TimeZoneInfo mountain = TimeZoneInfo.FindSystemTimeZoneById("India Standard Time");
            DateTime utc = currentDate;
            return TimeZoneInfo.ConvertTimeFromUtc(utc, mountain);
            //return DateTime.Now;
        }
        public static void SetObjectAsJson(this ISession session, string key, object value)
        {
            session.SetString(key, JsonConvert.SerializeObject(value));
        }

        public static ENTITIES.ProcessVar GetObjectFromJson(this ISession session, string key)
        {
            var value = session.GetString(key);
            return value == null ? default(ENTITIES.ProcessVar) : JsonConvert.DeserializeObject<ENTITIES.ProcessVar>(value);
        }
    }
}
