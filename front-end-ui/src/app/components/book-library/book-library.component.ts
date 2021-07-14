import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { UserHelperService } from 'src/app/services/user-helper.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { AddBookComponent } from './add-book/add-book.component';

@Component({
  selector: 'app-book-library',
  templateUrl: './book-library.component.html',
  styleUrls: ['./book-library.component.css']
})
export class BookLibraryComponent implements OnInit {
  books = new MatTableDataSource<Book>();
  displayedColumns: string[] = ['title', 'author', 'genre', 'quantity', 'delete'];

  libraryId!: number;

  searchTerm!: string;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog,
    private bookService: BookService,
    private userService: UserHelperService) { }

  ngOnInit(): void {
    this.books.data = [];
    const user = this.userService.getUserSession();
    if (user) {
      const id = +JSON.parse(user).id;

      this.bookService.getByUser(id).subscribe(result => {
        this.books.data = result.books;
        this.libraryId = result.id;
      })
    }
  }

  ngAfterViewInit() {
    this.books.paginator = this.paginator;
    this.books.sort = this.sort;
  }

  filter() {
    this.books.filter = this.searchTerm.trim().toLowerCase();
  }

  addBook() {
    const dialogRef = this.dialog.open(AddBookComponent, {
      width: '420px',
      data: { book: new Book('', '', 1), libraryId: this.libraryId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.books.data = [...this.books.data, result];
      }
    })
  }

  updateQuantity(book: Book) {
    this.bookService.updateQuantity(book).subscribe();
  }

  updateTitle(book: Book) {
    this.bookService.updateTitle(book).subscribe();
  }

  updateAuthor(book: Book) {
    this.bookService.updateAuthor(book).subscribe();
  }

  deleteBook(book: Book) {
    const confirmRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Delete',
        message: 'Are you sure you want to delete ' + book.title + '?'
      }
    });

    confirmRef.afterClosed().subscribe(result => {
      if (result) {
        this.bookService.deleteBook(book).subscribe(() => {
          this.books.data = this.books.data.filter(b => b !== book);
        });
      }
    });
  }
}
