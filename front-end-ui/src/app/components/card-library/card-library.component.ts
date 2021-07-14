import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';
import { UserHelperService } from 'src/app/services/user-helper.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { AddCardComponent } from './add-card/add-card.component';

@Component({
  selector: 'app-card-library',
  templateUrl: './card-library.component.html',
  styleUrls: ['./card-library.component.css']
})
export class CardLibraryComponent implements OnInit {
  cards = new MatTableDataSource<Card>();
  displayedColumns: string[] = ['name', 'type', 'quantity', 'delete'];
  libraryId!: number;
  searchTerm!: string;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  

  constructor(public dialog: MatDialog,
    private cardService: CardService,
    private userService: UserHelperService) { }

  ngOnInit(): void {
    this.cards.data = [];
    const user = this.userService.getUserSession();
    if (user) {
      const id = +JSON.parse(user).id;

      this.cardService.getByUser(id).subscribe(result => {
        this.cards.data = result.cards;
        this.libraryId = result.id;
      })
    };
  }

  ngAfterViewInit() {
    this.cards.paginator = this.paginator;
    this.cards.sort = this.sort;
  }

  filter() {
    this.cards.filter = this.searchTerm.trim().toLowerCase();
  }

  addCard() {
    const dialogRef = this.dialog.open(AddCardComponent, {
      width: '420px',
      data: { card: new Card('', '', 1), libraryId: this.libraryId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cards.data = [...this.cards.data, result];
      }
    })
  }
  
  updateQuantity(card: Card) {
    this.cardService.updateQuantity(card).subscribe();
  }


  updateName(card: Card) {
    this.cardService.updateName(card).subscribe();
  }

  deleteCard(card: Card) {
    const confirmRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Delete',
        message: 'Are you sure you want to delete ' + card.name + '?'
      }
    });

    confirmRef.afterClosed().subscribe(result => {
      if (result) {
        this.cardService.deleteCard(card).subscribe(() => {
          this.cards.data = this.cards.data.filter(c => c !== card);
        });
      }
    })
  }
}

