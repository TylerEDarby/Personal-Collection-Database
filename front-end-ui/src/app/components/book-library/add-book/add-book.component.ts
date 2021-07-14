import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from 'src/app/models/book';
import { BookGenre } from 'src/app/models/bookGenre';
import { BookGenreService } from 'src/app/services/book-genre.service';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  genres: BookGenre[] = [];

  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddBookComponent>,
    @Inject(MAT_DIALOG_DATA) public dataInput: { book: Book, libraryId: number},
    private bookService: BookService,
    private bookGenreService: BookGenreService) {

  }
    
  ngOnInit(): void {
    this.bookGenreService.getAll().subscribe(res => this.genres = res);
  }

  submit() {
    this.bookService.add(this.dataInput.libraryId, this.dataInput.book).subscribe(result => {
      this.dialogRef.close(result);
    });
  }

  cancel() {
    this.dialogRef.close();
  }
}
