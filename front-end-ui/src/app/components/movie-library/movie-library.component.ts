import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { UserHelperService } from 'src/app/services/user-helper.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { AddMovieComponent } from './add-movie/add-movie.component';

@Component({
  selector: 'app-movie-library',
  templateUrl: './movie-library.component.html',
  styleUrls: ['./movie-library.component.css']
})
export class MovieLibraryComponent implements OnInit {
  movies = new MatTableDataSource<Movie>();
  displayedColumns: string[] = ['title', 'format', 'quantity', 'delete'];

  libraryId!: number;

  searchTerm!: string;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, 
    private movieService: MovieService,
    private userService: UserHelperService) { }

  ngOnInit(): void {
    this.movies.data = [];
    const user = this.userService.getUserSession();
    if (user) {
      const id = +JSON.parse(user).id;

      this.movieService.getByUser(id).subscribe(result => {
        this.movies.data = result.movies;
        this.libraryId = result.id;
      })
    }
  }

  ngAfterViewInit() {
    this.movies.paginator = this.paginator;
    this.movies.sort = this.sort;
  }

  filter() {
    this.movies.filter = this.searchTerm.trim().toLowerCase();
  }



  addMovie() {
    const dialogRef = this.dialog.open(AddMovieComponent, {
      width: '420px',
      data: { movie: new Movie('', '', 1), libraryId: this.libraryId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.movies.data = [...this.movies.data, result];
      }
    })
  }
  updateTitle(movie: Movie) {
    this.movieService.updateTitle(movie).subscribe();
  }

  updateQuantity(movie: Movie) {
    this.movieService.updateQuantity(movie).subscribe();
  }

  deleteMovie(movie: Movie) {
    const confirmRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Delete',
        message: 'Are you sure you want to delete ' + movie.title + '?'
      }
    });

    confirmRef.afterClosed().subscribe(result => {
      if(result) {
        this.movieService.deleteMovie(movie).subscribe(() => {
          this.movies.data = this.movies.data.filter(b => b !== movie);
        });
      }
    })
  }
}
