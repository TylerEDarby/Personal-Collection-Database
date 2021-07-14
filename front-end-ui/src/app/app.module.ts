import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'

import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { BookLibraryComponent } from './components/book-library/book-library.component';
import { AddVideogameComponent } from './components/videogame-library/add-videogame/add-videogame.component';


import { CardLibraryComponent } from './components/card-library/card-library.component';
import { AddBookComponent } from './components/book-library/add-book/add-book.component';
import { AddCardComponent } from './components/card-library/add-card/add-card.component';

import { MovieLibraryComponent } from './components/movie-library/movie-library.component';
import { AddMovieComponent } from './components/movie-library/add-movie/add-movie.component';
import { VideogameLibraryComponent } from './components/videogame-library/videogame-library.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BookLibraryComponent,
    CardLibraryComponent,
    AddBookComponent,
    MovieLibraryComponent,
    AddMovieComponent,
    AddCardComponent,
    VideogameLibraryComponent,
    AddVideogameComponent,
    ConfirmDialogComponent,
    UserSettingsComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
