using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Team4.Seshat.Model.Models
{
    [Table("MovieFormat")]
    public class MovieFormat
    {
        public int Id { get; set; }

        public string FormatName { get; set; }
    }
}
