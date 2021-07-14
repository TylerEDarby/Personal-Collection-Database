using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Team4.Seshat.Model.Models
{
    [Table("CardRecord")]
    public class Card
    {
        public int Id { get; set; }
        public string Name { get; set; }
        [Column("Category")]
        public string Type { get; set; }
        public int? CardTypeId { get; set; }
        [ForeignKey("CardTypeId")]
        public virtual CardType CardType { get; set; }
        public int Quantity { get; set; }
        public int LibraryId { get; set; }
    }
}
