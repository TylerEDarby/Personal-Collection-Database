using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team4.Seshat.Model;

namespace Team4.Seshat.Controllers
{
    [Route("api/v1/bookGenres")]
    [ApiController]
    public class BookGenreController : ControllerBase
    {
        public BookGenreController(SeshatDataContext context)
        {
            Context = context;
        }

        public SeshatDataContext Context { get; }

        [HttpGet]
        [Route("")]
        public IActionResult GetAll()
        {
            return Ok(Context.BookGenres.ToList());
        }
    }
}
