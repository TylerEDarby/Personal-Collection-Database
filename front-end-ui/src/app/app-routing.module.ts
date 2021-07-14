import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { BookLibraryComponent } from './components/book-library/book-library.component';
import { CardLibraryComponent } from './components/card-library/card-library.component'

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MovieLibraryComponent } from './components/movie-library/movie-library.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { VideogameLibraryComponent } from './components/videogame-library/videogame-library.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'settings', component: UserSettingsComponent, canActivate: [AuthGuard] },

  { path: 'books', component: BookLibraryComponent, canActivate: [AuthGuard] },
  { path: 'cards', component: CardLibraryComponent, canActivate: [AuthGuard] },
  { path: 'movies', component: MovieLibraryComponent, canActivate: [AuthGuard] },
  { path: 'videogames', component: VideogameLibraryComponent, canActivate: [AuthGuard] },
  { path: 'registration', component: UserRegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
