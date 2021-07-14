using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Team4.Seshat.Model.Models
{
    [Table("CardType")]
    public class CardType
    {
        public int Id { get; set; }

        public string TypeName { get; set; }
    }
}
