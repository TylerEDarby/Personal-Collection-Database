using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Team4.Seshat.Model.Models
{
    [Table("UserLibrary")]
    public class UserLibrary
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }

        [ForeignKey("LibraryId")]
        public virtual ICollection<User> Users { get; set; }
    }
}
