import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Videogame } from 'src/app/models/videogame';
import { VideogameService } from 'src/app/services/videogame.service';

@Component({
  selector: 'app-add-videogame',
  templateUrl: './add-videogame.component.html',
  styleUrls: ['./add-videogame.component.css']
})
export class AddVideogameComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddVideogameComponent>,
    @Inject(MAT_DIALOG_DATA) public dataInput: { videogame: Videogame, libraryId: number},
    private videogameService: VideogameService) {

  }
    

  ngOnInit(): void {
  }

  submit() {
    this.videogameService.add(this.dataInput.libraryId, this.dataInput.videogame).subscribe(result => {
      this.dialogRef.close(result);
    });
  }

  cancel() {
    this.dialogRef.close();
  }
}