import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddCardComponent>,
    @Inject(MAT_DIALOG_DATA) public dataInput: { card: Card, libraryId: number },
    private cardService: CardService) {

    }
    

  ngOnInit(): void {
  }

  submit() {
    this.cardService.add(this.dataInput.libraryId, this.dataInput.card).subscribe(res => {
      this.dialogRef.close(res);
    })
  }

  cancel() {
    this.dialogRef.close();
  }
}
