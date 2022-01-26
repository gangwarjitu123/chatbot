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

        [HttpGet]
        public JsonResult GetQuestionById(string id)
        {
            string children = QuestionData.Where(x => x["id"]?.ToString() == id).FirstOrDefault().ToString();
            //if(!string.IsNullOrEmpty(children))
            //{
            //    children= children.Substring(1, children.Length - 2);
            //}

            return Json(JObject.Parse(children));
        }

    }
}
