using ChatBot.Common.ENTITIES;
using ChatBot.Models;
using ChatBot.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatBot.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        private IMongoRepository<QuestionAnswerInfo> _dataRepository1;
        private IMongoRepository<UserLogInfo> _dataRepository2;
       
        public HomeController(ILogger<HomeController> logger, IMongoRepository<QuestionAnswerInfo> dataRepository1, IMongoRepository<UserLogInfo> dataRepository2)
        {
            _logger = logger;
            this._dataRepository1 = dataRepository1;
            this._dataRepository2 = dataRepository2;
        }

        public IActionResult Index()
        {
            ViewBag.ID = RandomString(20, false);
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

    }
}
