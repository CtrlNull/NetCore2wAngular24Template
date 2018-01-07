using System;
using Microsoft.AspNetCore.Mvc;

namespace test1
{        
    [Route("api/[Controller]")]
    public class TestController : Controller
    {
        [HttpGet]
        public IActionResult Greetings() {
            return Ok("Hello from asp.net core web api");
        }
    }
}