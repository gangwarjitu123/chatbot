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
                    AnwerVariable.breastfedno = Data;
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

            var ddData = Common.CommonHelper.GetObjectFromJson(HttpContext.Session, "Message");
            if (ddData != null)
            {
                ProcessVar AnwerVariable = (ProcessVar)ddData;
                if (id==300)
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
                            if(AnwerVariable.nasalflaring=="Yes" || AnwerVariable.noiseduringbreathing=="Yes" || AnwerVariable.lookforassociated== "Cold Extremities" || AnwerVariable.lookforassociated == "Unable to drink/feed")
                            {
                                children = "severe";
                            }
                            else if(AnwerVariable.temperature> 37.4m || AnwerVariable.temperature<35.6m || AnwerVariable.historycondition=="None" || AnwerVariable.lookforassociated == "Movement less than normal" || AnwerVariable.lookforassociated == "Cold Extremities")
                            {
                                if(AnwerVariable.spo2applicable=="Yes")
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
                        else if (AnwerVariable.ageinmonth > 1  && AnwerVariable.ageinmonth < 12 && AnwerVariable.breathcount > 49 && AnwerVariable.severechestindrawing == "Yes" && AnwerVariable.ageinyear == 0)
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
                else if(id==400)
                {

                }
            }
            return Json(children);
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
