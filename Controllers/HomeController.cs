using ChatBot.Common.ENTITIES;
using ChatBot.Models;
using ChatBot.Repository;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatBot.Controllers
{
    public class HomeController : Controller
    {
        private readonly IWebHostEnvironment HostingEnvironment;
        private readonly ILogger<HomeController> _logger;
        public static JArray QuestionData;
        private IMongoRepository<QuestionAnswerInfo> _dataRepository1;
        private IMongoRepository<UserLogInfo> _dataRepository2;

        public HomeController(ILogger<HomeController> logger, IMongoRepository<QuestionAnswerInfo> dataRepository1, IMongoRepository<UserLogInfo> dataRepository2, IWebHostEnvironment hostingEnvironment)
        {
            _logger = logger;
            this._dataRepository1 = dataRepository1;
            this._dataRepository2 = dataRepository2;
            this.HostingEnvironment = hostingEnvironment;

        }
        public IActionResult Index()
        {
            ProcessVar AnwerVariable = new ProcessVar();
            Common.CommonHelper.SetObjectAsJson(HttpContext.Session, "Message", AnwerVariable);

            //QuestionData = LoadJson();
            ViewBag.ID = RandomString(20, false);

            //string children = QuestionData.Where(x => x["id"]?.ToString() == "15").FirstOrDefault().ToString();
            //JObject ddd = JObject.Parse(children);
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
        public string RandomString(int size, bool lowerCase = false)
        {
            Random _random = new Random();
            var builder = new StringBuilder(size);

            // Unicode/ASCII Letters are divided into two blocks
            // (Letters 65–90 / 97–122):
            // The first group containing the uppercase letters and
            // the second group containing the lowercase.  

            // char is a single Unicode character  
            char offset = lowerCase ? 'a' : 'A';
            const int lettersOffset = 26; // A...Z or a..z: length=26  

            for (var i = 0; i < size; i++)
            {
                var @char = (char)_random.Next(offset, offset + lettersOffset);
                builder.Append(@char);
            }

            return lowerCase ? builder.ToString().ToLower() : builder.ToString();
        }
        [HttpPost]
        public JsonResult AddChatLog(UserLogInfo jobj)
        {
            SetDataInVariable(jobj.DataVariableName, jobj.DataVariableValue);
            var resutl = _dataRepository2.InsertOneAsync(jobj);
            return Json(true);
        }

        public JArray LoadJson()
        {
            string wwwRoot = HostingEnvironment.WebRootPath;
            var JsonDataFile = wwwRoot + "/data1.json";
            using (StreamReader r = new StreamReader(JsonDataFile))
            {
                string json = r.ReadToEnd();
                dynamic dresult = JObject.Parse(json);
                return dresult.Questions;
                //List<Item> items = JsonConvert.DeserializeObject<List<Item>>(json);
            }
        }
        void SetDataInVariable(string VariableName, string Data)
        {
            var ddData = Common.CommonHelper.GetObjectFromJson(HttpContext.Session, "Message");
            ProcessVar AnwerVariable;
            if (ddData != null)
            {
                AnwerVariable = (ProcessVar)ddData;
            }
            else
            {
                AnwerVariable = new ProcessVar();
            }

            switch (VariableName)
            {
                case "startobj1":
                    AnwerVariable.startobj1 = Data;
                    break;
                case "childbelow5years":
                    AnwerVariable.childbelow5years = Data;
                    break;
                case "startobjMorethen5":
                    AnwerVariable.startobjMorethen5 = Data;
                    break;
                case "ageinyear":
                    AnwerVariable.ageinyear = Convert.ToInt32(Data);
                    break;
                case "weight":
                    AnwerVariable.weight = Convert.ToInt32(Data);
                    break;
                case "presentingwith":
                    AnwerVariable.presentingwith = Data;
                    break;
                case "feversince":
                    AnwerVariable.feversince = Convert.ToInt32(Data);
                    break;
                case "temperature":
                    AnwerVariable.temperature = Convert.ToDecimal(Data);
                    break;
                case "breathcount":
                    AnwerVariable.breathcount = Convert.ToInt32(Data);
                    break;
                case "severechestindrawing":
                    AnwerVariable.severechestindrawing = Data;
                    break;
                case "noiseduringbreathing":
                    AnwerVariable.noiseduringbreathing = Data;
                    break;
                case "nasalflaring":
                    AnwerVariable.nasalflaring = Data;
                    break;
                case "spo2applicable":
                    AnwerVariable.spo2applicable = Data;
                    break;
                case "spo2rate":
                    AnwerVariable.spo2rate = Convert.ToInt32(Data);
                    break;
                case "covidtest":
                    AnwerVariable.covidtest = Data;
                    break;
                case "ICMRtestingID":
                    AnwerVariable.ICMRtestingID = Data;
                    break;
                case "contactwithcovid":
                    AnwerVariable.contactwithcovid = Data;
                    break;
                case "covidantigentest":
                    AnwerVariable.covidantigentest = Data;
                    break;
                case "lookforassociated":
                    AnwerVariable.lookforassociated = Data;
                    break;
                case "historycondition":
                    AnwerVariable.historycondition = Data;
                    break;
                case "endcovidresult":
                    AnwerVariable.endcovidresult = Data;
                    break;
                case "rchidapplicable":
                    AnwerVariable.rchidapplicable = Data;
                    break;
                case "rchid":
                    AnwerVariable.rchid = Data;
                    break;
                case "suspectingcovid19":
                    AnwerVariable.suspectingcovid19 = Data;
                    break;
                case "assesschildforcovid19":
                    AnwerVariable.assesschildforcovid19 = Data;
                    break;
                case "ageinmonth":
                    AnwerVariable.ageinmonth = Convert.ToInt32(Data);
                    break;
                case "assesschildforimnci":
                    AnwerVariable.assesschildforimnci = Data;
                    break;
                case "isyounginfant":
                    AnwerVariable.isyounginfant = Data;
                    break;
                case "ageinweek":
                    AnwerVariable.ageinweek = Convert.ToInt32(Data);
                    break;
                case "gender":
                    AnwerVariable.gender = Data;
                    break;
                case "symptoms_lessthan2":
                    AnwerVariable.symptoms_lessthan2 = Data;
                    break;
                case "jaundicetime":
                    AnwerVariable.jaundicetime = Data;
                    break;
                case "palm_sole":
                    AnwerVariable.palm_sole = Data;
                    break;
                case "dehydration_lessthan2":
                    AnwerVariable.dehydration_lessthan2 = Data;
                    break;
                case "routineassessment":
                    AnwerVariable.routineassessment = Data;
                    break;
                case "breastfedno":
                    AnwerVariable.breastfedno = Convert.ToInt32(Data);
                    break;
                case "feedingproblem":
                    AnwerVariable.feedingproblem = Data;
                    break;
                case "vacforage":
                    AnwerVariable.vacforage = Data;
                    break;
                case "gds":
                    AnwerVariable.gds = Data;
                    break;
                case "symptoms_greterthan2":
                    AnwerVariable.symptoms_greterthan2 = Data;
                    break;
                case "coughdays":
                    AnwerVariable.coughdays = Convert.ToInt32(Data);
                    break;
                case "diarrhoeadays":
                    AnwerVariable.diarrhoeadays = Convert.ToInt32(Data);
                    break;
                case "bloodinstool":
                    AnwerVariable.bloodinstool = Data;
                    break;
                case "dehydration_graterthan2":
                    AnwerVariable.dehydration_graterthan2 = Data;
                    break;
                case "stiffneck":
                    AnwerVariable.stiffneck = Data;
                    break;
                case "malariardt":
                    AnwerVariable.malariardt = Data;
                    break;
                case "odemafeet":
                    AnwerVariable.odemafeet = Data;
                    break;
                case "heightincm":
                    AnwerVariable.heightincm = Convert.ToDecimal(Data);
                    break;
                case "muac":
                    AnwerVariable.muac = Data;
                    break;
                case "palm_pallor":
                    AnwerVariable.palm_pallor = Data;
                    break;
                default:
                    break;
            }
            Common.CommonHelper.SetObjectAsJson(HttpContext.Session, "Message", AnwerVariable);
        }

        [HttpGet]
        public JsonResult GetQuestionById(string id)
        {
            string children = QuestionData.Where(x => x["id"]?.ToString() == id).FirstOrDefault().ToString();

            return Json(JObject.Parse(children));
        }

        [HttpPost]
        public JsonResult GetSummary(int id)
        {
            string txtHtml = "";
            string children = "";
            DataSummary objSummary = new DataSummary();
            List<SummaryItem> objItem = new List<SummaryItem>();

            var ddData = Common.CommonHelper.GetObjectFromJson(HttpContext.Session, "Message");
            if (ddData != null)
            {
                ProcessVar AnwerVariable = (ProcessVar)ddData;
                if (id == 300)
                {
                    int flg = 0;
                    if (AnwerVariable.covidtest == "Yes" || AnwerVariable.covidantigentest == "Positvie" || AnwerVariable.contactwithcovid == "Yes")
                    {
                        if (AnwerVariable.feversince > 2)
                        {
                            if (!AnwerVariable.presentingwith.Contains("None"))
                            {
                                children = "severe";
                                flg = 1;
                            }
                        }
                    }
                    if (flg == 0)
                    {
                        if (AnwerVariable.ageinmonth < 2 && AnwerVariable.breathcount > 59 && AnwerVariable.severechestindrawing == "Yes" && AnwerVariable.ageinyear == 0)
                        {
                            if (AnwerVariable.nasalflaring == "Yes" || AnwerVariable.noiseduringbreathing == "Yes" || AnwerVariable.lookforassociated == "Cold Extremities" || AnwerVariable.lookforassociated == "Unable to drink/feed")
                            {
                                children = "severe";
                            }
                            else if (AnwerVariable.temperature > 37.4m || AnwerVariable.temperature < 35.6m || AnwerVariable.historycondition == "None" || AnwerVariable.lookforassociated == "Movement less than normal" || AnwerVariable.lookforassociated == "Cold Extremities")
                            {
                                if (AnwerVariable.spo2applicable == "Yes")
                                {
                                    if (AnwerVariable.spo2rate > 90)
                                    {
                                        children = "mild";
                                    }
                                    else
                                        children = "severe";
                                }
                                else
                                {
                                    children = "mild";
                                }
                            }
                        }
                        else if (AnwerVariable.ageinmonth > 1 && AnwerVariable.ageinmonth < 12 && AnwerVariable.breathcount > 49 && AnwerVariable.severechestindrawing == "Yes" && AnwerVariable.ageinyear == 0)
                        {
                            if (AnwerVariable.nasalflaring == "Yes" || AnwerVariable.noiseduringbreathing == "Yes" || AnwerVariable.lookforassociated == "Cold Extremities" || AnwerVariable.lookforassociated == "Unable to drink/feed")
                            {
                                children = "severe";
                            }
                            else if (AnwerVariable.temperature > 37.4m || AnwerVariable.temperature < 35.6m || AnwerVariable.historycondition == "None" || AnwerVariable.lookforassociated == "Movement less than normal" || AnwerVariable.lookforassociated == "Cold Extremities")
                            {
                                if (AnwerVariable.spo2applicable == "Yes")
                                {
                                    if (AnwerVariable.spo2rate > 90)
                                    {
                                        children = "mild";
                                    }
                                    else
                                        children = "severe";
                                }
                                else
                                {
                                    children = "mild";
                                }
                            }
                        }
                        else if (AnwerVariable.ageinyear > 0 && AnwerVariable.ageinmonth < 6 && AnwerVariable.breathcount > 39 && AnwerVariable.severechestindrawing == "Yes")
                        {
                            if (AnwerVariable.nasalflaring == "Yes" || AnwerVariable.noiseduringbreathing == "Yes" || AnwerVariable.lookforassociated == "Cold Extremities" || AnwerVariable.lookforassociated == "Unable to drink/feed")
                            {
                                children = "severe";
                            }
                            else if (AnwerVariable.temperature > 37.4m || AnwerVariable.temperature < 35.6m || AnwerVariable.historycondition == "None" || AnwerVariable.lookforassociated == "Movement less than normal" || AnwerVariable.lookforassociated == "Cold Extremities")
                            {
                                if (AnwerVariable.spo2applicable == "Yes")
                                {
                                    if (AnwerVariable.spo2rate > 90)
                                    {
                                        children = "mild";
                                    }
                                    else
                                        children = "severe";
                                }
                                else
                                {
                                    children = "mild";
                                }
                            }
                        }
                        else if (AnwerVariable.ageinyear > 5 && AnwerVariable.breathcount > 29 && AnwerVariable.severechestindrawing == "Yes")
                        {
                            if (AnwerVariable.nasalflaring == "Yes" || AnwerVariable.noiseduringbreathing == "Yes" || AnwerVariable.lookforassociated == "Cold Extremities" || AnwerVariable.lookforassociated == "Unable to drink/feed")
                            {
                                children = "severe";
                            }
                            else if (AnwerVariable.temperature > 37.4m || AnwerVariable.temperature < 35.6m || AnwerVariable.historycondition == "None" || AnwerVariable.lookforassociated == "Movement less than normal" || AnwerVariable.lookforassociated == "Cold Extremities")
                            {
                                if (AnwerVariable.spo2applicable == "Yes")
                                {
                                    if (AnwerVariable.spo2rate > 90)
                                    {
                                        children = "mild";
                                    }
                                    else
                                        children = "severe";
                                }
                                else
                                {
                                    children = "mild";
                                }
                            }
                        }
                        else if (AnwerVariable.ageinmonth > 2 && AnwerVariable.breathcount > 59 && AnwerVariable.severechestindrawing == "No" && AnwerVariable.ageinyear == 0)
                        {
                            if (AnwerVariable.temperature > 37.4m || AnwerVariable.temperature < 35.6m || AnwerVariable.historycondition == "None" || AnwerVariable.lookforassociated == "Movement less than normal" || AnwerVariable.lookforassociated == "Cold Extremities")
                            {
                                if (AnwerVariable.spo2applicable == "Yes")
                                {
                                    if (AnwerVariable.spo2rate > 90)
                                    {
                                        children = "mild";
                                    }
                                    else
                                        children = "severe";
                                }
                                else
                                {
                                    children = "mild";
                                }
                            }
                        }
                        else if (AnwerVariable.ageinmonth > 1 && AnwerVariable.ageinmonth < 12 && AnwerVariable.breathcount > 49 && AnwerVariable.severechestindrawing == "No" && AnwerVariable.ageinyear == 0)
                        {
                            if (AnwerVariable.temperature > 37.4m || AnwerVariable.temperature < 35.6m || AnwerVariable.historycondition == "None" || AnwerVariable.lookforassociated == "Movement less than normal" || AnwerVariable.lookforassociated == "Cold Extremities")
                            {
                                if (AnwerVariable.spo2applicable == "Yes")
                                {
                                    if (AnwerVariable.spo2rate > 90)
                                    {
                                        children = "mild";
                                    }
                                    else
                                        children = "severe";
                                }
                                else
                                {
                                    children = "mild";
                                }
                            }
                        }
                        else if (AnwerVariable.ageinyear > 0 && AnwerVariable.ageinyear < 6 && AnwerVariable.breathcount > 39 && AnwerVariable.severechestindrawing == "No")
                        {
                            if (AnwerVariable.temperature > 37.4m || AnwerVariable.temperature < 35.6m || AnwerVariable.historycondition == "None" || AnwerVariable.lookforassociated == "Movement less than normal" || AnwerVariable.lookforassociated == "Cold Extremities")
                            {
                                if (AnwerVariable.spo2applicable == "Yes")
                                {
                                    if (AnwerVariable.spo2rate > 90)
                                    {
                                        children = "mild";
                                    }
                                    else
                                        children = "severe";
                                }
                                else
                                {
                                    children = "mild";
                                }
                            }
                        }
                        else if (AnwerVariable.ageinyear > 5 && AnwerVariable.breathcount > 29 && AnwerVariable.severechestindrawing == "No")
                        {
                            if (AnwerVariable.temperature > 37.4m || AnwerVariable.temperature < 35.6m || AnwerVariable.historycondition == "None" || AnwerVariable.lookforassociated == "Movement less than normal" || AnwerVariable.lookforassociated == "Cold Extremities")
                            {
                                if (AnwerVariable.spo2applicable == "Yes")
                                {
                                    if (AnwerVariable.spo2rate > 90)
                                    {
                                        children = "mild";
                                    }
                                    else
                                        children = "severe";
                                }
                                else
                                {
                                    children = "mild";
                                }
                            }
                        }
                        else
                        {
                            if (AnwerVariable.lookforassociated.Contains("Lethargic or Unconscious") || AnwerVariable.lookforassociated.Contains("Convulsion or History of convulsion") || AnwerVariable.lookforassociated.Contains("Unable to drink/feed"))
                            {
                                if (AnwerVariable.spo2applicable == "Yes")
                                {
                                    if (AnwerVariable.spo2rate > 93)
                                    {
                                        children = "normal mild";
                                    }
                                    else
                                        children = "mild";
                                }
                                else
                                {
                                    children = "mild";
                                }
                            }
                            else
                            {
                                if (AnwerVariable.spo2applicable == "Yes")
                                {
                                    if (AnwerVariable.spo2rate > 93)
                                    {
                                        children = "normal";
                                    }
                                    else
                                        children = "severe";
                                }
                                else
                                {
                                    children = "normal";
                                }
                            }
                        }
                    }
                }
                else if (id == 400)
                {
                    if (AnwerVariable.routineassessment == "Not feeding well or Not able to feed" || AnwerVariable.routineassessment == "Child had convulsions" || AnwerVariable.breathcount > 59)
                    {
                        SummaryItem obj1 = new SummaryItem();
                        SummaryItem obj2 = new SummaryItem();
                        SummaryItem obj3 = new SummaryItem();
                        obj1.item = "Child is having Possible Serious Bacterial Infection";

                        obj2.item += "Give first dose of oral Amoxicillin and intramuscular Gentamicin<br />";
                        obj2.item += "Treat to prevent low blood sugar<br />";
                        obj2.item += "Advice mother how to keep the infant warm on the way to the hospital<br />";
                        obj2.item += "Refer Urgently to Hospital<br />";

                        if (AnwerVariable.weight < 2)
                        {
                            obj3.item = "Oral Amoxicillin 50 mg";
                        }
                        else if (AnwerVariable.weight > 1.9M && AnwerVariable.weight < 3M)
                        {
                            obj3.item = "Oral Amoxicillin 60 mg";
                        }
                        else if (AnwerVariable.weight > 2.9M && AnwerVariable.weight < 4M)
                        {
                            obj3.item = "Oral Amoxicillin 87 mg";
                        }
                        else
                        {
                            obj3.item = "Oral Amoxicillin 125 mg";
                        }

                        if (AnwerVariable.ageinweek == 0)
                        {
                            obj3.item = "Inj Gentamicin genta_less_7_days mg";
                        }
                        else
                        {
                            obj3.item = "Inj Gentamicin genta_more_7_days mg";
                        }
                        objItem.Add(obj1);
                        objItem.Add(obj2);
                        objItem.Add(obj3);
                    }
                    if (AnwerVariable.routineassessment.Contains("Umbilicus is red") && AnwerVariable.routineassessment.Contains("Skin pustules"))
                    {
                        SummaryItem obj1 = new SummaryItem();
                        obj1.item += "Infection Unlikely";
                        obj1.item += "Advise the mother to give home care for the young infant";
                        objItem.Add(obj1);
                    }
                    else if (AnwerVariable.routineassessment.Contains("Umbilicus draining pus") && AnwerVariable.routineassessment.Contains("Skin pustules"))
                    {
                        SummaryItem obj1 = new SummaryItem();

                        obj1.item += "Child is having Local Bectarial Infection<br />";
                        obj1.item += "Give Oral Amoxicillin for 5 Days<br />";
                        obj1.item += "Teach the mother how to treat local infections at home<br />";
                        obj1.item += "Advise mother to give home care for the young infant<br />";
                        obj1.item += "Follow-up after 2 days<br />";
                        objItem.Add(obj1);

                        if (AnwerVariable.weight < 2)
                        {
                            SummaryItem obj2 = new SummaryItem();
                            obj2.item += "Oral Amoxicillin 50 mg";
                            objItem.Add(obj2);
                        }
                        else if (AnwerVariable.weight > 1.9M && AnwerVariable.weight < 3M)
                        {
                            SummaryItem obj2 = new SummaryItem();
                            obj2.item += "Oral Amoxicillin 60 mg";
                            objItem.Add(obj2);
                        }
                        else if (AnwerVariable.weight > 2.9M && AnwerVariable.weight < 4M)
                        {
                            SummaryItem obj2 = new SummaryItem();
                            obj2.item += "Oral Amoxicillin 87 mg";
                            objItem.Add(obj2);
                        }
                        else
                        {
                            SummaryItem obj2 = new SummaryItem();
                            obj2.item += "Oral Amoxicillin 125 mg";
                            objItem.Add(obj2);
                        }
                    }
                    else
                    {
                        SummaryItem obj2 = new SummaryItem();
                        obj2.item += "Infection Unlikely<br />";
                        obj2.item += "Advise the mother to give home care for the young infant<br />";
                        objItem.Add(obj2);
                        //Infection Unlikely
                        //"Advise the mother to give home care for the young infant"

                    }
                    if (AnwerVariable.symptoms_lessthan2.Contains("Diarrhoea"))
                    {
                        int flgSet = 0;
                        if (AnwerVariable.dehydration_lessthan2.Contains("Movement only when stimulated or no movement at all") && AnwerVariable.dehydration_lessthan2.Contains("Sunken eyes"))
                        {
                            flgSet = 1;

                        }
                        else if (AnwerVariable.dehydration_lessthan2.Contains("Skin pinch goes back very slowly (takes >= 2 Secs)") && AnwerVariable.dehydration_lessthan2.Contains("Sunken eyes"))
                        {
                            flgSet = 1;
                        }
                        else if (AnwerVariable.dehydration_lessthan2.Contains("Skin pinch goes back very slowly (takes >= 2 Secs)") && AnwerVariable.dehydration_lessthan2.Contains("Movement only when stimulated or no movement at all"))
                        {
                            flgSet = 1;
                        }
                        else if (AnwerVariable.dehydration_lessthan2.Contains("Skin pinch goes back slowly (takes < 2 Secs)") && AnwerVariable.dehydration_lessthan2.Contains("Sunken eyes"))
                        {
                            flgSet = 2;
                        }
                        else if (AnwerVariable.dehydration_lessthan2.Contains("Restless and irritable") && AnwerVariable.dehydration_lessthan2.Contains("Sunken eyes"))
                        {
                            flgSet = 2;
                        }
                        else if (AnwerVariable.dehydration_lessthan2.Contains("Restless and irritable") && AnwerVariable.dehydration_lessthan2.Contains("Skin pinch goes back slowly (takes < 2 Secs)"))
                        {
                            flgSet = 2;
                        }

                        if (flgSet == 0)
                        {
                            SummaryItem obj2 = new SummaryItem();

                            obj2.item += "Diarrhoea with No dehydration<br />";
                            obj2.item += "Give Fluids(ORS -Plan A) and continue breastfeeding at home<br />";
                            obj2.item += "Give 5 spoon ORS after each loose stool<br />";
                            obj2.item += "Advise mother when to return immediately<br />";
                            obj2.item += "Follow up after 2 days if no improvement<br />";

                            objItem.Add(obj2);
                        }
                        else if (flgSet == 1)
                        {
                            SummaryItem obj2 = new SummaryItem();
                            obj2.item += "Child is having Diarrhoea with Severe Dehydration<br />";

                            obj2.item += "Give first dose of oral Amoxicillin and intramuscular gentamicin<br />";
                            obj2.item += "Refer urgently to hospital with the mother giving frequent sips of ORS on the way<br />";
                            obj2.item += "Advise mother to continue breast feeding<br />";
                            obj2.item += "Advise mother how to keep young infant warm on the way to the hospital<br />";
                            objItem.Add(obj2);
                            if (AnwerVariable.weight < 2)
                            {
                                SummaryItem obj3 = new SummaryItem();
                                obj2.item += "Oral Amoxicillin 50 mg";
                                objItem.Add(obj3);
                            }
                            else if (AnwerVariable.weight > 1.9M && AnwerVariable.weight < 3M)
                            {
                                SummaryItem obj3 = new SummaryItem();
                                obj2.item += "Oral Amoxicillin 60 mg";
                                objItem.Add(obj3);
                            }
                            else if (AnwerVariable.weight > 2.9M && AnwerVariable.weight < 4M)
                            {
                                SummaryItem obj3 = new SummaryItem();
                                obj2.item += "Oral Amoxicillin 87 mg";
                                objItem.Add(obj3);
                            }
                            else
                            {
                                SummaryItem obj3 = new SummaryItem();
                                obj2.item += "Oral Amoxicillin 125 mg";
                                objItem.Add(obj3);
                            }

                            if (AnwerVariable.ageinweek == 0)
                            {
                                // Inj Gentamicin genta_less_7_days mg
                                SummaryItem obj3 = new SummaryItem();
                                obj2.item += "Inj Gentamicin genta_less_7_days mg";
                                objItem.Add(obj3);
                            }
                            else
                            {
                                //Inj Gentamicin genta_more_7_days mg
                                SummaryItem obj3 = new SummaryItem();
                                obj2.item += "Inj Gentamicin genta_less_7_days mg";
                                objItem.Add(obj3);
                            }
                        }
                        else if (flgSet == 2)
                        {

                            SummaryItem obj5 = new SummaryItem();
                            obj5.item += "Inj Gentamicin genta_less_7_days mg<br />";
                            obj5.item += "Child is having Diarrhoea with Some Dehydration<br />";
                            obj5.item += "Give first dose of oral Amoxicillin and intramuscular gentamicin<br />";
                            obj5.item += "Refer urgently to hospital with the mother giving frequent sips of ORS on the way<br />";
                            obj5.item += "Advise mother to continue breast feeding<br />";
                            obj5.item += "Advise mother how to keep young infant warm on the way to the hospital<br />";
                            objItem.Add(obj5);

                            if (AnwerVariable.weight < 2)
                            {
                                //Oral Amoxicillin 50 mg
                                SummaryItem obj6 = new SummaryItem();
                                obj6.item += "Oral Amoxicillin 50 mg";
                                objItem.Add(obj6);
                            }
                            else if (AnwerVariable.weight > 1.9M && AnwerVariable.weight < 3M)
                            {
                                SummaryItem obj6 = new SummaryItem();
                                obj6.item += "Oral Amoxicillin 60 mg";
                                objItem.Add(obj6);
                            }
                            else if (AnwerVariable.weight > 2.9M && AnwerVariable.weight < 4M)
                            {
                                SummaryItem obj6 = new SummaryItem();
                                obj6.item += "Oral Amoxicillin 87 mg";
                                objItem.Add(obj6);
                            }
                            else
                            {
                                SummaryItem obj6 = new SummaryItem();
                                obj6.item += "Oral Amoxicillin 125 mg";
                                objItem.Add(obj6);
                            }

                            if (AnwerVariable.ageinweek == 0)
                            {
                                // Inj Gentamicin genta_less_7_days mg
                                SummaryItem obj6 = new SummaryItem();
                                obj6.item += "Inj Gentamicin genta_less_7_days mg";
                                objItem.Add(obj6);
                            }
                            else
                            {
                                //Inj Gentamicin genta_more_7_days mg
                                SummaryItem obj6 = new SummaryItem();
                                obj6.item += "Inj Gentamicin genta_more_7_days mg";
                                objItem.Add(obj6);
                            }
                        }
                    }
                    if (AnwerVariable.symptoms_lessthan2.Contains("Jaundice"))
                    {
                        if (AnwerVariable.jaundicetime == "In first 24 hr of birth" || AnwerVariable.palm_sole == "Yes")
                        {
                            SummaryItem obj6 = new SummaryItem();

                            obj6.item += "Child is having severe Jaundice<br />";
                            obj6.item += "Treat to prevent low blood sugar<br />";
                            obj6.item += "Refer Urgently to Hospital<br />";
                            obj6.item += "Advise mother how to keep baby warm on the way to hospital<br />";
                            objItem.Add(obj6);

                        }
                        if (AnwerVariable.jaundicetime == "After 1 day of birth" || AnwerVariable.palm_sole == "No")
                        {
                            SummaryItem obj6 = new SummaryItem();

                            obj6.item += "Child is having Jaundice<br />";
                            obj6.item += "Advise the mother how to give home care for young infant<br />";
                            obj6.item += "Advise the mother to return immediately if the infant's palm or soles appear yellow<br />";
                            obj6.item += "If the infant is older than 2 weeks, refer to hospital for assessment<br />";
                            obj6.item += "Follow-up after 2 days<br />";
                            objItem.Add(obj6);

                        }
                    }
                    if (AnwerVariable.breastfedno < 8 || AnwerVariable.feedingproblem.Contains("Breast or Nipple problem") || AnwerVariable.feedingproblem.Contains("Not suckling effectively") || AnwerVariable.feedingproblem.Contains("Attachment to breast is Not good") || AnwerVariable.feedingproblem.Contains("Received other food or drink") || AnwerVariable.feedingproblem.Contains("Ulcers or white patches in the mouth (thrush)"))
                    {
                        SummaryItem obj3 = new SummaryItem();
                        obj3.item += "Child is having Feeding problem and/or low weight";
                        objItem.Add(obj3);
                        if (AnwerVariable.vacforage == "No")
                        {
                            SummaryItem obj9 = new SummaryItem();
                            obj9.item += "Child is not vaccinated for Age<br />";
                            obj9.item += "Please contact your near health care facility to complete child vaccination";
                            objItem.Add(obj9);
                        }
                        else if (AnwerVariable.vacforage == "Yes")
                        {
                            //Child is vaccinated for age
                            SummaryItem obj9 = new SummaryItem();
                            obj9.item += "Child is vaccinated for age";
                            objItem.Add(obj9);
                            /////END=---------
                        }
                        else
                        {
                            SummaryItem obj9 = new SummaryItem();
                            obj9.item += "Child Vaccination status verification is pending";
                            objItem.Add(obj9);
                            //Child Vaccination status verification is pending
                            /////END=---------
                        }
                    }
                    else
                    {
                        SummaryItem obj9 = new SummaryItem();

                        obj9.item += "Child does not have feeding problem.<br />";
                        obj9.item += "Praise the mother for feeding the infant well<br />";
                        obj9.item += "Advice Mother to give homecare for the young infant<br />";
                        objItem.Add(obj9);


                        /////END=---------
                    }
                }
                else if (id == 500)
                {
                    if (AnwerVariable.gds.Contains("Lethargic or Unconscious") || AnwerVariable.gds.Contains("Not able to drink or breastfeed") || AnwerVariable.gds.Contains("Vomits everything"))
                    {
                        SummaryItem obj9 = new SummaryItem();

                        obj9.item += "Child is having Danger sign, needs urgent attention <br /> ";
                        obj9.item += "Refer immediately after giving applicable pre referral dose<br />";
                        objItem.Add(obj9);

                    }

                    if (AnwerVariable.symptoms_greterthan2.Contains("Cough or Difficulty in breathing"))
                    {
                        if (!AnwerVariable.gds.Contains("None") || AnwerVariable.severechestindrawing == "Yes" || AnwerVariable.spo2rate < 90)
                        {
                            SummaryItem obj9 = new SummaryItem();
                            obj9.item += "Child is having Severe Pnumonia or Very Severe Disease<br />";

                            obj9.item += "Give pre referral dose of oral Amoxicillin & IM Gentamicin<br />";
                            obj9.item += "Refer urgently to hospital<br />";

                            objItem.Add(obj9);


                            if (AnwerVariable.weight > 3.9M && AnwerVariable.weight < 6M)
                            {
                                SummaryItem obj10 = new SummaryItem();
                                obj10.item += "Oral Amoxicillin 125 mg<br />";
                                obj10.item += "Inj Gentamicin 30 mg<br />";
                                objItem.Add(obj10);

                            }
                            else if (AnwerVariable.weight > 5.9M && AnwerVariable.weight < 10M)
                            {
                                SummaryItem obj10 = new SummaryItem();
                                obj10.item += "Oral Amoxicillin 250 mg<br />";
                                obj10.item += "Inj Gentamicin 60 mg<br />";
                                objItem.Add(obj10);
                            }
                            else if (AnwerVariable.weight > 9.9M && AnwerVariable.weight < 14M)
                            {
                                SummaryItem obj10 = new SummaryItem();
                                obj10.item += "Oral Amoxicillin 375 mg<br />";
                                obj10.item += "Inj Gentamicin 90 mg<br />";
                                objItem.Add(obj10);
                            }
                            else if (AnwerVariable.weight > 13.9M)
                            {
                                SummaryItem obj10 = new SummaryItem();
                                obj10.item += "Oral Amoxicillin 500 mg<br />";
                                obj10.item += "Inj Gentamicin 130 mg<br />";
                                objItem.Add(obj10);
                            }
                        }
                        else if (AnwerVariable.ageinmonth < 12 && AnwerVariable.breathcount > 49 && AnwerVariable.ageinweek == 0)
                        {
                            //Child is having Pneumonia
                            SummaryItem obj9 = new SummaryItem();
                            obj9.item += "Child is having Pneumonia";
                            objItem.Add(obj9);
                        }
                        else if (AnwerVariable.ageinweek > 0 && AnwerVariable.breathcount > 39)
                        {
                            SummaryItem obj10 = new SummaryItem();
                            obj10.item += "Child is having Pneumonia<br />";
                            obj10.item += "Give Amoxicillin for 5 days<br />";
                            obj10.item += "Advise home care for cough and cold<br />";
                            obj10.item += "Follow-up after 2 days<br />";
                            objItem.Add(obj10);

                            if (AnwerVariable.weight > 3.9M && AnwerVariable.weight < 6M)
                            {
                                SummaryItem obj3 = new SummaryItem();
                                obj3.item += "Oral Amoxicillin 125 mg";
                                objItem.Add(obj3);
                            }
                            else if (AnwerVariable.weight > 5.9M && AnwerVariable.weight < 10M)
                            {
                                SummaryItem obj3 = new SummaryItem();
                                obj3.item += "Oral Amoxicillin 250 mg";
                                objItem.Add(obj3);
                            }
                            else if (AnwerVariable.weight > 9.9M && AnwerVariable.weight < 14M)
                            {
                                SummaryItem obj3 = new SummaryItem();
                                obj3.item += "Oral Amoxicillin 375 mg";
                                objItem.Add(obj3);
                            }
                            else if (AnwerVariable.weight > 13.9M)
                            {
                                SummaryItem obj3 = new SummaryItem();
                                obj3.item += "Oral Amoxicillin 500 mg";
                                objItem.Add(obj3);
                            }
                        }
                        else
                        {
                            SummaryItem obj3 = new SummaryItem();

                            obj3.item += "No Pneumonia, Cough or Cold<br />";
                            obj3.item += "Advise home care for cough and cold<br />";
                            obj3.item += "if coughing for more than 14 days, refer for assessment<br />";

                            objItem.Add(obj3);

                        }
                    }
                    if (AnwerVariable.symptoms_greterthan2.Contains("Diarrhoea"))
                    {
                        int flg = 0;
                        if (AnwerVariable.diarrhoeadays > 13)
                        {
                            SummaryItem obj3 = new SummaryItem();

                            obj3.item += "Child is Having Persistant Diarrhoea<br />";
                            obj3.item += "Refer urgently to hospital with the mother giving frequent sips of ORS on the way<br />";
                            obj3.item += "Advise mother to continue breast feeding<br />";
                            obj3.item += "Advise mother how to keep young infant warm on the way to the hospital<br />";

                            objItem.Add(obj3);

                        }
                        if (AnwerVariable.bloodinstool == "Yes")
                        {
                            SummaryItem obj3 = new SummaryItem();
                            obj3.item += "Child is having Dysentry<br />";
                            obj3.item += "Refer urgently to hospital with the mother giving frequent sips of ORS on the way<br />";
                            obj3.item += "Advise mother to continue breast feeding<br />";
                            obj3.item += "Advise mother how to keep young infant warm on the way to the hospital<br />";

                            objItem.Add(obj3);


                        }

                        if (AnwerVariable.diarrhoeadays < 14 && AnwerVariable.gds.Contains("Lethargic or Unconscious") && AnwerVariable.dehydration_graterthan2.Contains("Sunken eyes"))
                        {
                            SummaryItem obj3 = new SummaryItem();
                            obj3.item += "Child is having Diarrhoea with Severe Dehydration<br />";
                            obj3.item += "Refer urgently to hospital with mother giving frequent sips of ORS on the way<br />";
                            obj3.item += "Advise the mother to continue breastfeeding<br />";
                            objItem.Add(obj3);

                        }
                        else if (AnwerVariable.diarrhoeadays < 14 && AnwerVariable.gds.Contains("Lethargic or Unconscious") && AnwerVariable.gds.Contains("Not able to drink or breastfeed"))
                        {
                            SummaryItem obj3 = new SummaryItem();
                            obj3.item += "Child is having Diarrhoea with Severe Dehydration<br />";
                            obj3.item += "Refer urgently to hospital with mother giving frequent sips of ORS on the way<br />";
                            obj3.item += "Advise the mother to continue breastfeeding<br />";
                            objItem.Add(obj3);

                        }
                        else if (AnwerVariable.diarrhoeadays < 14 && AnwerVariable.gds.Contains("Lethargic or Unconscious") && AnwerVariable.dehydration_graterthan2.Contains("Skin pinch goes back very slowly (Takes >= 2 Sec)"))
                        {
                            SummaryItem obj3 = new SummaryItem();
                            obj3.item += "Child is having Diarrhoea with Severe Dehydration<br />";
                            obj3.item += "Refer urgently to hospital with mother giving frequent sips of ORS on the way<br />";
                            obj3.item += "Advise the mother to continue breastfeeding<br />";
                            objItem.Add(obj3);
                        }
                        else if (AnwerVariable.diarrhoeadays < 14 && AnwerVariable.gds.Contains("Not able to drink or breastfeed") && AnwerVariable.dehydration_graterthan2.Contains("Sunken eyes"))
                        {
                            SummaryItem obj3 = new SummaryItem();
                            obj3.item += "Child is having Diarrhoea with Severe Dehydration<br />";
                            obj3.item += "Refer urgently to hospital with mother giving frequent sips of ORS on the way<br />";
                            obj3.item += "Advise the mother to continue breastfeeding<br />";
                            objItem.Add(obj3);
                        }
                        else if (AnwerVariable.diarrhoeadays < 14 && AnwerVariable.dehydration_graterthan2.Contains("Skin pinch goes back very slowly (Takes >= 2 Sec)") && AnwerVariable.dehydration_graterthan2.Contains("Sunken eyes"))
                        {
                            SummaryItem obj3 = new SummaryItem();
                            obj3.item += "Child is having Diarrhoea with Severe Dehydration<br />";
                            obj3.item += "Refer urgently to hospital with mother giving frequent sips of ORS on the way<br />";
                            obj3.item += "Advise the mother to continue breastfeeding<br />";
                            objItem.Add(obj3);
                        }
                        else if (AnwerVariable.diarrhoeadays < 14 && AnwerVariable.dehydration_graterthan2.Contains("Skin pinch goes back very slowly (Takes >= 2 Sec)") && AnwerVariable.gds.Contains("Not able to drink or breastfeed"))
                        {
                            SummaryItem obj3 = new SummaryItem();
                            obj3.item += "Child is having Diarrhoea with Severe Dehydration<br />";
                            obj3.item += "Refer urgently to hospital with mother giving frequent sips of ORS on the way<br />";
                            obj3.item += "Advise the mother to continue breastfeeding<br />";
                            objItem.Add(obj3);
                        }
                        if (AnwerVariable.diarrhoeadays < 14 && AnwerVariable.dehydration_graterthan2.Contains("Restless and irritable") && AnwerVariable.dehydration_graterthan2.Contains("Drinks eagerly, thirsty"))
                        {
                            SummaryItem obj3 = new SummaryItem();
                            obj3.item += "Child is having Diarrhoea with Some Dehydration<br />";
                            obj3.item += "Give fluid, zinc supplements and food for some dehydration (Plan B)<br />";
                            obj3.item += "Follow up after 2 days if not improving<br />";

                            obj3.item += "ORS: plan_b_ors ml in first 4 hrs, reassess after 4 hrs and continue treatment as per appropriate plan";
                            objItem.Add(obj3);
                            if (AnwerVariable.ageinyear == 0 && AnwerVariable.ageinmonth > 1 && AnwerVariable.ageinmonth < 7)
                            {
                                SummaryItem obj31 = new SummaryItem();
                                obj31.item += "Tab Zinc 10 mg for 14 days";
                                objItem.Add(obj31);
                                //Tab Zinc 10 mg for 14 days
                            }
                            else if (AnwerVariable.ageinyear == 0 && AnwerVariable.ageinmonth < 6)
                            {
                                //Tab Zinc 20 mg for 14 days
                                SummaryItem obj31 = new SummaryItem();
                                obj31.item += "Tab Zinc 20 mg for 14 days";
                                objItem.Add(obj31);
                            }
                        }
                        else if (AnwerVariable.diarrhoeadays < 14 && AnwerVariable.dehydration_graterthan2.Contains("Restless and irritable") && AnwerVariable.dehydration_graterthan2.Contains("Skin pinch goes back slowly (takes < 2 Secs)"))
                        {
                            SummaryItem obj3 = new SummaryItem();
                            obj3.item += "Child is having Diarrhoea with Some Dehydration<br />";
                            obj3.item += "Give fluid, zinc supplements and food for some dehydration (Plan B)<br />";
                            obj3.item += "Follow up after 2 days if not improving<br />";

                            obj3.item += "ORS: plan_b_ors ml in first 4 hrs, reassess after 4 hrs and continue treatment as per appropriate plan";
                            objItem.Add(obj3);
                            if (AnwerVariable.ageinyear == 0 && AnwerVariable.ageinmonth > 1 && AnwerVariable.ageinmonth < 7)
                            {
                                SummaryItem obj31 = new SummaryItem();
                                obj31.item += "Tab Zinc 10 mg for 14 days";
                                objItem.Add(obj31);
                                //Tab Zinc 10 mg for 14 days
                            }
                            else if (AnwerVariable.ageinyear == 0 && AnwerVariable.ageinmonth < 6)
                            {
                                //Tab Zinc 20 mg for 14 days
                                SummaryItem obj31 = new SummaryItem();
                                obj31.item += "Tab Zinc 20 mg for 14 days";
                                objItem.Add(obj31);
                            }
                        }
                        else if (AnwerVariable.diarrhoeadays < 14 && AnwerVariable.dehydration_graterthan2.Contains("Restless and irritable") && AnwerVariable.dehydration_graterthan2.Contains("Skin pinch goes back slowly (takes < 2 Secs)"))
                        {
                            SummaryItem obj3 = new SummaryItem();
                            obj3.item += "Child is having Diarrhoea with Some Dehydration<br />";
                            obj3.item += "Give fluid, zinc supplements and food for some dehydration (Plan B)<br />";
                            obj3.item += "Follow up after 2 days if not improving<br />";

                            obj3.item += "ORS: plan_b_ors ml in first 4 hrs, reassess after 4 hrs and continue treatment as per appropriate plan";
                            objItem.Add(obj3);
                            if (AnwerVariable.ageinyear == 0 && AnwerVariable.ageinmonth > 1 && AnwerVariable.ageinmonth < 7)
                            {
                                SummaryItem obj31 = new SummaryItem();
                                obj31.item += "Tab Zinc 10 mg for 14 days";
                                objItem.Add(obj31);
                                //Tab Zinc 10 mg for 14 days
                            }
                            else if (AnwerVariable.ageinyear == 0 && AnwerVariable.ageinmonth < 6)
                            {
                                //Tab Zinc 20 mg for 14 days
                                SummaryItem obj31 = new SummaryItem();
                                obj31.item += "Tab Zinc 20 mg for 14 days";
                                objItem.Add(obj31);
                            }
                        }
                        else
                        {
                            //Child is having Diarrhoea with No Dehydration

                            //Give fluid(ORS), zinc suppliments and food to treat diarrhoea at home(Plan A)
                            //Follow up after 2 days if not improving

                            if (AnwerVariable.ageinyear == 0 && AnwerVariable.ageinmonth > 1 && AnwerVariable.ageinmonth < 12)
                            {
                                //ORS: 1/4 to 1/2 cup after each loose stool
                            }
                            else if (AnwerVariable.ageinyear > 0 && AnwerVariable.ageinyear < 3)
                            {
                                //ORS: 1/4 to 1/2 cup after each loose stool
                            }
                            else if (AnwerVariable.ageinyear > 2)
                            {
                                //ORS: 1/2 to 1 cup after each loose stool
                            }
                            if (AnwerVariable.ageinyear == 0 && AnwerVariable.ageinmonth > 1 && AnwerVariable.ageinmonth < 7)
                            {
                                //Tab Zinc 10 mg for 14 days
                            }
                            else if (AnwerVariable.ageinyear == 0 && AnwerVariable.ageinmonth < 6)
                            {
                                //Tab Zinc 20 mg for 14 days
                            }
                        }
                    }
                    if (AnwerVariable.symptoms_greterthan2.Contains("Fever"))
                    {
                        if (!AnwerVariable.gds.Contains("None") || AnwerVariable.stiffneck == "Yes")
                        {
                            SummaryItem obj31 = new SummaryItem();
                            obj31.item += "Child is having Very severe febrile disease<br />";
                            obj31.item += "Give First dose of oral Amoxicillin and IM Gentamicin<br />";
                            obj31.item += "Treat the child to prevent low blood sugar<br />";
                            obj31.item += "Give first dose of paracetamol for high fever (>= 38.5 C)<br />";
                            obj31.item += "Refer Urgently to hospital<br />";
                            objItem.Add(obj31);

                            if (AnwerVariable.weight > 3.9M && AnwerVariable.weight < 6M)
                            {
                                SummaryItem obj3 = new SummaryItem();
                                obj3.item += "Oral Amoxicillin 125 mg<br />";
                                obj3.item += "Inj Gentamicin 30 mg<br />";
                                objItem.Add(obj3);
                                //Oral Amoxicillin 125 mg
                                //Inj Gentamicin 30 mg
                            }
                            else if (AnwerVariable.weight > 5.9M && AnwerVariable.weight < 10M)
                            {
                                SummaryItem obj3 = new SummaryItem();
                                obj3.item += "Oral Amoxicillin 250 mg<br />";
                                obj3.item += "Inj Gentamicin 60 mg<br />";
                                objItem.Add(obj3);
                            }
                            else if (AnwerVariable.weight > 9.9M && AnwerVariable.weight < 14M)
                            {
                                SummaryItem obj3 = new SummaryItem();
                                obj3.item += "Oral Amoxicillin 375 mg<br />";
                                obj3.item += "Inj Gentamicin 90 mg<br />";
                                objItem.Add(obj3);
                            }
                            else if (AnwerVariable.weight > 13.9M)
                            {
                                SummaryItem obj3 = new SummaryItem();
                                obj3.item += "Oral Amoxicillin 500 mg<br />";
                                obj3.item += "Inj Gentamicin 130 mg<br />";
                                objItem.Add(obj3);
                            }
                            if (AnwerVariable.weight > 3.9M && AnwerVariable.weight < 10M)
                            {
                                //Oral Paracetamol 100 mg
                                SummaryItem obj3 = new SummaryItem();
                                obj3.item += "Oral Paracetamol 100 mg<br />";
                                objItem.Add(obj3);
                            }
                            else if (AnwerVariable.weight > 9.9M && AnwerVariable.weight < 15M)
                            {
                                SummaryItem obj3 = new SummaryItem();
                                obj3.item += "Oral Paracetamol 150 mg<br />";
                                objItem.Add(obj3);
                            }
                            else if (AnwerVariable.weight > 14.9M && AnwerVariable.weight < 20M)
                            {
                                SummaryItem obj3 = new SummaryItem();
                                obj3.item += "Oral Paracetamol 250 mg<br />";
                                objItem.Add(obj3);
                            }
                            else if (AnwerVariable.weight > 20M)
                            {
                                SummaryItem obj3 = new SummaryItem();
                                obj3.item += "Oral Paracetamol 500 mg<br />";
                                objItem.Add(obj3);
                            }
                        }
                        else
                        {
                            if (AnwerVariable.malariardt == "Positive")
                            {
                                SummaryItem obj3 = new SummaryItem();
                                 obj3.item += "Child is having Malaria / Suspected Malaria<br />";
                                obj3.item += "Give oral antimalarial as per national guidelines after making a smear<br />";
                                obj3.item += "Give first dose of paracetamol for high fever (>= 38.5 C)<br />";
                                obj3.item += "Advise mother when to return immediately<br />";
                                obj3.item += "Follow up after 2 days<br />";
                                objItem.Add(obj3);


                                if (AnwerVariable.ageinmonth > 1 && AnwerVariable.ageinmonth < 6 && AnwerVariable.ageinyear == 0)
                                {
                                    SummaryItem obj32 = new SummaryItem();
                                    obj32.item += "Oral Paracetamol 100 mg<br />";
                                    obj32.item += "For P. Falci:<br />";
                                    obj32.item += "Oral Artesunate as_4 mg for 3 days<br />";
                                    obj32.item += "For P Vivax:<br />";
                                    obj32.item += "Oral Chloroquine chq_10 mg for 2 days, followed by chq_5 mg for 3rd day<br />";
                                    obj32.item += "and<br />";
                                    obj32.item += "Oral Primaquine pq_025 mg for 14 days<br />";
                                    obj32.item += "For Mix infection:<br />";
                                    obj32.item += "Oral Artesunate as_4 mg for 3 days<br />";
                                    objItem.Add(obj32);

                                }
                                else if (AnwerVariable.ageinmonth > 5 && AnwerVariable.ageinmonth < 12 && AnwerVariable.ageinyear == 0)
                                {
                                    SummaryItem obj32 = new SummaryItem();
                                    obj32.item += "For P. Falci:<br />";
                                    obj32.item += "Oral Artesunate as_4 mg for 3 days<br />";
                                    obj32.item += "and<br />";
                                    obj32.item += "Oral Sulfadoxine sd_25 mg + Pyremethamine pm_125 mg on first day<br />";
                                    obj32.item += "For P Vivax:<br />";
                                    obj32.item += "Oral Chloroquine chq_10 mg for 2 days, followed by chq_5 mg for 3rd day<br />";
                                    obj32.item += "and<br />";
                                    obj32.item += "Oral Primaquine pq_025 mg for 14 days<br />";
                                    obj32.item += "For Mix infection:<br />";
                                    obj32.item += "Oral Artesunate as_4 mg for 3 days<br />";
                                    obj32.item += "and<br />";
                                    obj32.item += "Oral Sulfadoxine sd_25 mg + Pyremethamine pm_125 mg on first day<br />";
                                    objItem.Add(obj32);
                                }
                                else if (AnwerVariable.ageinyear > 0)
                                {
                                    SummaryItem obj32 = new SummaryItem();
                                    obj32.item += "For P. Falci:<br />";
                                    obj32.item += "Oral Artesunate as_4 mg for 3 days<br />";
                                    obj32.item += "and<br />";
                                    obj32.item += "Oral Sulfadoxine sd_25 mg + Pyremethamine pm_125 mg on first day<br />";
                                    obj32.item += "and<br />";
                                    obj32.item += "Oral Primaquine pq_075 mg on second day<br />";
                                    obj32.item += "For P Vivax:<br />";
                                    obj32.item += "Oral Chloroquine chq_10 mg for 2 days, followed by chq_5 mg for 3rd day<br />";
                                    obj32.item += "and<br />";
                                    obj32.item += "Oral Primaquine pq_025 mg for 14 days<br />";
                                    obj32.item += "For Mix infection:<br />";
                                    obj32.item += "Oral Artesunate as_4 mg for 3 days<br />";
                                    obj32.item += "and<br />";
                                    obj32.item += "Oral Sulfadoxine sd_25 mg + Pyremethamine pm_125 mg on first day<br />";
                                    obj32.item += "and<br />";
                                    obj32.item += "Oral Primaquine pq_075 mg for 14 days<br />";
                                    objItem.Add(obj32);
                                }

                                if (AnwerVariable.weight > 3.9M && AnwerVariable.weight < 10M)
                                {
                                    SummaryItem obj32 = new SummaryItem();
                                    obj32.item += "Oral Paracetamol 100 mg";
                                    objItem.Add(obj32);
                                }
                                else if (AnwerVariable.weight > 9.9M && AnwerVariable.weight < 15M)
                                {
                                    SummaryItem obj32 = new SummaryItem();
                                    obj32.item += "Oral Paracetamol 150 mg";
                                    objItem.Add(obj32);
                                }
                                else if (AnwerVariable.weight > 14.9M && AnwerVariable.weight < 20M)
                                {
                                    SummaryItem obj32 = new SummaryItem();
                                    obj32.item += "Oral Paracetamol 250 mg";
                                    objItem.Add(obj32);
                                }
                                else if (AnwerVariable.weight > 20M)
                                {
                                    SummaryItem obj32 = new SummaryItem();
                                    obj32.item += "Oral Paracetamol 500 mg";
                                    objItem.Add(obj32);
                                }
                            }
                        }

                    }
                    if (!AnwerVariable.gds.Contains("None"))
                    {
                        ////end
                    }
                    else
                    {

                    }
                }
            }
            objSummary.data = children;
            objSummary.Item = objItem;
            return Json(objSummary);
        }

        [HttpPost]
        public JsonResult ResetVariable(int id)
        {
            ProcessVar AnwerVariable = new ProcessVar();
            Common.CommonHelper.SetObjectAsJson(HttpContext.Session, "Message", AnwerVariable);
            return Json("Ok");
        }
    }
}
