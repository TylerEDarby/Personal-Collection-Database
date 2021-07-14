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
    [Route("api/v1/movies")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        public MovieController(SeshatDataContext context)
        {
            Context = context;
        }

        public SeshatDataContext Context { get; }

        [HttpGet]
        [Route("getByUser")]
        public IActionResult GetByUser(int id)
        {
            MovieLibrary library = Context.MovieLibraries.Include(ml => ml.Movies).FirstOrDefault(ml => ml.UserId == id);

            if (library == null)
            {
                library = Context.MovieLibraries.Add(new MovieLibrary() { UserId = id }).Entity;
                library.Movies = new List<Movie>();
                Context.SaveChanges();
            }

            return Ok(library);
        }

        [HttpPost]
        [Route("add")]
        public IActionResult Add(int libraryId, Movie movie)
        {
            movie.LibraryId = libraryId;
            Movie addedMovie = Context.Movies.Add(movie).Entity;
            Context.SaveChanges();
            return Ok(addedMovie);
        }

        [HttpPut]
        [Route("updateQuantity")]
        public IActionResult UpdateQuantity(Movie movie)
        {
            Context.Movies.Update(movie);
            Context.SaveChanges();
            return Ok();
        }

        [HttpDelete]
        [Route("")]
        public IActionResult DeleteBook([FromBody] Movie movie)
        {
            Context.Movies.Remove(movie);
            Context.SaveChanges();
            return Ok();
        }

        [HttpPut]
        [Route("updateTitle")]
        public IActionResult UpdateTitle(Movie movie)
        {
            Context.Movies.Update(movie);
            Context.SaveChanges();
            return Ok();
        }
    }



}
