using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatBot.Common.ENTITIES
{
    public class DataSummary
    {
        public string data { get; set; }
        public List<SummaryItem> Item { get; set; }
    }
    public class SummaryItem
    {
        public string item { get; set; }
    }

    public class ProcessVar
    {
        public string startobj1 { get; set; }
        public string childbelow5years { get; set; }
        public string startobjMorethen5 { get; set; }
        public int ageinyear { get; set; }
        public decimal weight { get; set; }
        public string presentingwith { get; set; }
        public int feversince { get; set; }
        public decimal temperature { get; set; }
        public int breathcount { get; set; }
        public string severechestindrawing { get; set; }
        public string noiseduringbreathing { get; set; }
        public string nasalflaring { get; set; }
        public string spo2applicable { get; set; }
        public int spo2rate { get; set; }
        public string covidtest { get; set; }
        public string ICMRtestingID { get; set; }
        public string contactwithcovid { get; set; }
        public string covidantigentest { get; set; }
        public string lookforassociated { get; set; }
        public string historycondition { get; set; }
        public string endcovidresult { get; set; }
        public string rchidapplicable { get; set; }
        public string rchid { get; set; }
        public string suspectingcovid19 { get; set; }
        public string assesschildforcovid19 { get; set; }
        public int ageinmonth { get; set; }
        public string assesschildforimnci { get; set; }
        public string isyounginfant { get; set; }
        public int ageinweek { get; set; }
        public string gender { get; set; }
        public string symptoms_lessthan2 { get; set; }
        public string jaundicetime { get; set; }
        public string palm_sole { get; set; }
        public string dehydration_lessthan2 { get; set; }
        public string routineassessment { get; set; }
        public int breastfedno { get; set; }
        public string feedingproblem { get; set; }
        public string vacforage { get; set; }
        public string gds { get; set; }
        public string symptoms_greterthan2 { get; set; }
        public int coughdays { get; set; }
        public int diarrhoeadays { get; set; }
        public string bloodinstool { get; set; }
        public string dehydration_graterthan2 { get; set; }
        public string stiffneck { get; set; }
        public string malariardt { get; set; }
        public string odemafeet { get; set; }
        public decimal heightincm { get; set; }
        public decimal muac { get; set; }
        public string palm_pallor { get; set; }

    }
}
