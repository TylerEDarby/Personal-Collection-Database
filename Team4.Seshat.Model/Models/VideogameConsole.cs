using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Team4.Seshat.Model.Models
{
    [Table("VideogameConsole")]
    public class VideogameConsole
    {
        public int Id { get; set; }

        public string ConsoleName { get; set; }
    }
}
