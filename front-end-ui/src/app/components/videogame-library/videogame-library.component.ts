import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Videogame } from 'src/app/models/videogame';
import { VideogameService } from 'src/app/services/videogame.service';
import { UserHelperService } from 'src/app/services/user-helper.service';
import { AddVideogameComponent } from './add-videogame/add-videogame.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-videogame-library',
  templateUrl: './videogame-library.component.html',
  styleUrls: ['./videogame-library.component.css']
})
export class VideogameLibraryComponent implements OnInit {
  videogames = new MatTableDataSource<Videogame>();
  displayedColumns: string[] = ['title', 'console', 'quantity', 'delete'];

  libraryId!: number;

  searchTerm!: string;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog,
    private videogameService: VideogameService,
    private userService: UserHelperService) { }

  ngOnInit(): void {
    this.videogames.data = [];
    const user = this.userService.getUserSession();
    if (user) {
      const id = +JSON.parse(user).id;

      this.videogameService.getByUser(id).subscribe(result => {
        this.videogames.data = result.videogames;
        this.libraryId = result.id;
      })
    }
  }

  ngAfterViewInit() {
    this.videogames.paginator = this.paginator;
    this.videogames.sort = this.sort;
  }

  filter() {
    this.videogames.filter = this.searchTerm.trim().toLowerCase();
  }

  addVideogame() {
    const dialogRef = this.dialog.open(AddVideogameComponent, {
      width: '420px',
      data: { videogame: new Videogame('', '', 1), libraryId: this.libraryId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.videogames.data = [...this.videogames.data, result];
      }
    })
  }

  updateTitle(videogame: Videogame) {
    this.videogameService.updateTitle(videogame).subscribe();
  }

  updateQuantity(videogame: Videogame) {
    this.videogameService.updateQuantity(videogame).subscribe();
  }

  deleteVideogame(videogame: Videogame) {
    const confirmRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Delete',
        message: 'Are you sure you want to delete ' + videogame.title + '?'
      }
    });

    confirmRef.afterClosed().subscribe(result => {
      if (result) {
        this.videogameService.deleteVideogame(videogame).subscribe(() => {
          this.videogames.data = this.videogames.data.filter(v => v !== videogame);
        });
      }
    })
  }

}
