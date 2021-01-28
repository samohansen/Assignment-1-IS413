using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Assignment_1.Models
{
    public class GradeCalcModel
    {
        [Required]
        [Range(0,100)]
        public string assignments { get; set; }
        [Required]
        [Range(0,100)]
        public string groupproj { get; set; }
        [Required]
        [Range(0, 100)]
        public string quiz { get; set; }
        [Required]
        [Range(0, 100)]
        public string exam { get; set; }
        [Required]
        [Range(0, 100)]
        public string intex { get; set; }

    }
}
