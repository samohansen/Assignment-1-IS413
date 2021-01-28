using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Assignment_1.Models;

namespace Assignment_1.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet("GradeCalc")]
        public IActionResult GradeCalc()
        {
            return View();
        }
        [HttpPost("GradeCalc")]
        public IActionResult GradeCalc(GradeCalcModel model)
        {
            return View();
        }
    }
}
