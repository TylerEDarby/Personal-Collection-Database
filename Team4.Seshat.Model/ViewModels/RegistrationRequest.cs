using System;
using System.Collections.Generic;
using System.Text;

namespace Team4.Seshat.Model.ViewModels
{
    public class RegistrationRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
    }
}
