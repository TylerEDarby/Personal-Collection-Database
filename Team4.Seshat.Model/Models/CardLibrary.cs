using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Team4.Seshat.Model.Models
{
    [Table("CardLibrary")]
    public class CardLibrary
    {
        public int Id { get; set; }
        public int UserId { get; set; }

        [ForeignKey("LibraryId")]
        public virtual ICollection<Card> Cards { get; set; }
    }
}
