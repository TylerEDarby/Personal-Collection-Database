using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Team4.Seshat.Model.Models
{
    [Table("MovieRecord")]
    public class Movie
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Format { get; set; }
        public int? MovieFormatId { get; set; }
        [ForeignKey("MovieFormatId")]
        public virtual MovieFormat MovieFormat { get; set; }
        public int Quantity { get; set; }
        public int LibraryId { get; set; }
    }
}
