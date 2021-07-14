using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team4.Seshat.Model;
using Team4.Seshat.Model.Models;
using Team4.Seshat.Model.ViewModels;

namespace Team4.Seshat.Controllers
{
    [ApiController]
    [Route("api/v1/user")]
    public class UserController : ControllerBase
    {
        public UserController(SeshatDataContext context)
        {
            Context = context;
        }

        public SeshatDataContext Context { get; }

        /// <summary>
        /// GET request with url localhost:44322/v1/user
        /// Get the list of users
        /// In the Real World™ you wouldn't return the password (especially not as plaintext)
        /// </summary>
        /// <returns>Returns the list of users</returns>
        [HttpGet]
        [Route("")]
        public IActionResult GetUsers()
        {
            return Ok(Context.Users);
        }

        /// <summary>
        /// POST request with url localhost:44322/v1/user/login
        /// Compares the given username and password combination
        /// </summary>
        /// <param name="loginRequest">The login request object contains the given username and password</param>
        /// <returns>Returns Ok result with User if username and password combination is correct, otherwise returns Unauthorized</returns>
        [HttpPost]
        [Route("login")]
        public IActionResult Login(LoginRequest loginRequest)
        {
            User matchingUser = Context.Users.FirstOrDefault(user => user.Username.ToLower() == loginRequest.Username.ToLower());
            if (matchingUser != null && matchingUser.Password == loginRequest.Password)
            {
                return Ok(matchingUser);
            }

            return Unauthorized();
        }

        [HttpPost]
        [Route("register")]
        public IActionResult Add(RegistrationRequest registrationRequest)
        {
            User newUser = new User();
            newUser.Username = registrationRequest.Username;
            newUser.Password = registrationRequest.Password;
            User addedUser = Context.Users.Add(newUser).Entity;
            Context.SaveChanges();
            return Ok(addedUser);
        }
    }
}
