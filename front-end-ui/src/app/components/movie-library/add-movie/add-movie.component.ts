import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/app/models/movie';
import { FormBuilder} from "@angular/forms";
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(private FormBuilder: FormBuilder, 
    public dialogRef: MatDialogRef<AddMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public dataInput: {movie: Movie, libraryId: number},
    private movieService: MovieService) { 

    }

  ngOnInit(): void {
  }

  submit() {
    this.movieService.add(this.dataInput.libraryId, this.dataInput.movie).subscribe(result => {
      this.dialogRef.close(result);
    });
  }

  cancel() {
    this.dialogRef.close();
  }
}
