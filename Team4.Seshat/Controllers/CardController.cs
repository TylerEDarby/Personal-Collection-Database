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
    [Route("api/v1/cards")]
    [ApiController]
    public class CardController : ControllerBase
    {
        public CardController(SeshatDataContext context)
        {
            Context = context;
        }

        public SeshatDataContext Context { get; }

        [HttpGet]
        [Route("getByUser")]
        public IActionResult GetByUser(int id)
        {
            CardLibrary library = Context.CardLibraries.Include(cl => cl.Cards).FirstOrDefault(cl => cl.UserId == id);

            if (library == null)
            {
                library = Context.CardLibraries.Add(new CardLibrary() { UserId = id }).Entity;
                library.Cards = new List<Card>();
                Context.SaveChanges();
            }

            return Ok(library);
        }

        [HttpPost]
        [Route("add")]
        public IActionResult Add(int libraryId, Card card)
        {
            card.LibraryId = libraryId;
            Card addedCard = Context.Cards.Add(card).Entity;
            Context.SaveChanges();
            return Ok(addedCard);
        }

        [HttpPut]
        [Route("updateQuantity")]
        public IActionResult UpdateQuantity(Card card)
        {
            Context.Cards.Update(card);
            Context.SaveChanges();
            return Ok();
        }

        [HttpDelete]
        [Route("")]
        public IActionResult DeleteCard([FromBody] Card card)
        {
            Context.Cards.Remove(card);
            Context.SaveChanges();
            return Ok();
        }

        [HttpPut]
        [Route("updateName")]
        public IActionResult UpdateName(Card card)
        {
            Context.Cards.Update(card);
            Context.SaveChanges();
            return Ok();
        }

    }
}
