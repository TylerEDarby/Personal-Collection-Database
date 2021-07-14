using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Team4.Seshat.Model.Models
{
    [Table("BookRecord")]
    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public int Quantity { get; set; }
        public int? BookGenreId { get; set; }
        [ForeignKey("BookGenreId")]
        public BookGenre Genre { get; set; }
        public int LibraryId { get; set; }
    }
}
