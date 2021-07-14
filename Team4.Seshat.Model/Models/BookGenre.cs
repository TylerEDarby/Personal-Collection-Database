using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Team4.Seshat.Model.Models
{
    [Table("BookGenre")]
    public class BookGenre
    {
        public int Id { get; set; }

        public string GenreName { get; set; }
    }
}
