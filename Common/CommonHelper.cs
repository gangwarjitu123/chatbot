using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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

    }
}
