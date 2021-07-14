using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Team4.Seshat.Model;
using Team4.Seshat.Model.Models;

namespace Team4.Seshat.Controllers
{
    [Route("api/v1/videogames")]
    [ApiController]
    public class VideogameController : ControllerBase
    {
        public VideogameController(SeshatDataContext context)
        {
            Context = context;
        }

        public SeshatDataContext Context { get; }

        [HttpGet]
        [Route("getByUser")]
        public IActionResult GetByUser(int id)
        {
            VideogameLibrary library = Context.VideogameLibraries.Include(vl => vl.Videogames).FirstOrDefault(vl => vl.UserId == id);

            if (library == null)
            {
                library = Context.VideogameLibraries.Add(new VideogameLibrary() { UserId = id }).Entity;
                library.Videogames = new List<Videogame>();
                Context.SaveChanges();
            }

            return Ok(library);
        }
    [HttpPost]
    [Route("add")]
    public IActionResult Add(int libraryId, Videogame videogame)
    {
        videogame.LibraryId = libraryId;
        Videogame addedVideogame = Context.Videogames.Add(videogame).Entity;
        Context.SaveChanges();
        return Ok(addedVideogame);
    }

    [HttpPut]
    [Route("updateQuantity")]
    public IActionResult UpdateQuantity(Videogame videogame)
    {
        Context.Videogames.Update(videogame);
        Context.SaveChanges();
        return Ok();
    }

    [HttpDelete]
    [Route("")]
    public IActionResult DeleteBook([FromBody] Videogame videogame)
    {
        Context.Videogames.Remove(videogame);
        Context.SaveChanges();
        return Ok();
    }

    [HttpPut]
    [Route("updateTitle")]
    public IActionResult UpdateTitle(Videogame videogame)
    {
        Context.Videogames.Update(videogame);
        Context.SaveChanges();
        return Ok();
    }

    }
}
