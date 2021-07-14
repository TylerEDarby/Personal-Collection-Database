using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Team4.Seshat.Model.Models
{
    [Table("VideogameRecord")]
    public class Videogame
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Console { get; set; }
        public int? VideogameConsoleId { get; set; }
        [ForeignKey("VideogameConsoleId")]
        public virtual VideogameConsole VideogameConsole { get; set; }
        public int Quantity { get; set; }
        public int LibraryId { get; set; }
    }
}
