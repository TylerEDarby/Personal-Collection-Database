using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Team4.Seshat.Model.Models
{
    [Table("MovieLibrary")]
    public class MovieLibrary
    {
        public int Id { get; set; }
        public int UserId { get; set; }

        [ForeignKey("LibraryId")]
        public virtual ICollection<Movie> Movies { get; set; }
    }
}
