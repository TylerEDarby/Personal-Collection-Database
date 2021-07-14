using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Team4.Seshat.Model.Models;

namespace Team4.Seshat.Model
{
    public class SeshatDataContext : DbContext
    {
        public SeshatDataContext(DbContextOptions<SeshatDataContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Book> Books { get; set; }
        public virtual DbSet<BookGenre> BookGenres { get; set; }
        public virtual DbSet<BookLibrary> BookLibraries { get; set; }
        public virtual DbSet<Card> Cards { get; set; }
        public virtual DbSet<CardLibrary> CardLibraries { get; set; }
        public virtual DbSet<CardType> CardTypes { get; set; }
        public virtual DbSet<Movie> Movies { get; set; }
        public virtual DbSet<MovieFormat> MovieFormats { get; set; }
        public virtual DbSet<MovieLibrary> MovieLibraries { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Videogame> Videogames { get; set; }
        public virtual DbSet<VideogameConsole> VideogameConsoles { get; set; }
        public virtual DbSet<VideogameLibrary> VideogameLibraries { get; set; }
    }
}
