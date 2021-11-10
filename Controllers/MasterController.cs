using ChatBot.Common.ENTITIES;
using ChatBot.Repository;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatBot.Controllers
{
    //[ApiController]
    //[Route("api/[controller]")]
    public class MasterController : Controller
    //public class MasterController : ControllerBase
    {
        private IMongoRepository<QuestionAnswerInfo> _dataRepository1;
        private IMongoRepository<UserLogInfo> _dataRepository2;
        public MasterController(IMongoRepository<QuestionAnswerInfo> dataRepository1, IMongoRepository<UserLogInfo> dataRepository2)
        {
            this._dataRepository1 = dataRepository1;
            this._dataRepository2 = dataRepository2;
        }
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost("AddQuestionAnswer")]
        public Task InsertOneAsync(QuestionAnswerInfo info)
        {
            return _dataRepository1.InsertOneAsync(info);
        }
        [HttpPost("AddChatLog")]
        public Task InsertOneAsync(UserLogInfo info)
        {
            return _dataRepository2.InsertOneAsync(info);
        }
    }
}
