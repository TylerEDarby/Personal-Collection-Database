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
    [Route("api/v1/books")]
    [ApiController]
    public class BookController : ControllerBase
    {
        public BookController(SeshatDataContext context)
        {
            Context = context;
        }

        public SeshatDataContext Context { get; }

        [HttpGet]
        [Route("getByUser")]
        public IActionResult GetByUser(int id)
        {
            BookLibrary library = Context.BookLibraries.Include(bl => bl.Books).ThenInclude(b => b.Genre).FirstOrDefault(bl => bl.UserId == id);

            if (library == null)
            {
                library = Context.BookLibraries.Add(new BookLibrary() { UserId = id }).Entity;
                library.Books = new List<Book>();
                Context.SaveChanges();
            }

            return Ok(library);
        }

        [HttpPost]
        [Route("add")]
        public IActionResult Add(int libraryId, Book book)
        {
            book.LibraryId = libraryId;
            Book addedBook = Context.Books.Add(book).Entity;
            addedBook.Genre = Context.BookGenres.FirstOrDefault(bg => bg.Id == book.BookGenreId);
            Context.SaveChanges();
            return Ok(addedBook);
        }

        [HttpPut]
        [Route("updateQuantity")]
        public IActionResult UpdateQuantity(Book book)
        {
            Context.Books.Update(book);
            Context.SaveChanges();
            return Ok();
        }

        [HttpDelete]
        [Route("")]
        public IActionResult DeleteBook([FromBody]Book book)
        {
            Context.Books.Remove(book);
            Context.SaveChanges();
            return Ok();
        }

        [HttpPut]
        [Route("updateTitle")]
        public IActionResult UpdateTitle(Book book)
        {
            Context.Books.Update(book);
            Context.SaveChanges();
            return Ok();
        }

        [HttpPut]
        [Route("updateAuthor")]
        public IActionResult UpdateAuthor(Book book)
        {
            Context.Books.Update(book);
            Context.SaveChanges();
            return Ok();
        }
    }
}
