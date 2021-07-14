import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Local } from 'protractor/built/driverProviders';
import { UserHelperService } from './services/user-helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private userHelper: UserHelperService,
    private router: Router) { }

  isLoggedIn: boolean = false;
  links = [
    { label: 'Home', routerLink: '/home' }
    
  ];
  title = 'Seshat';
  username = '';

  ngOnInit(): void {
    this.checkLogIn(this.userHelper.getUserSession() !== null);
    this.userHelper.isLoggedInSubject.subscribe( x => {
      this.checkLogIn(x);
    });
  }

  updateLinks() {
    if (this.isLoggedIn) {
      // Add links for libraries
      this.links = [
                  { label: 'Home', routerLink: '/home' },
                  { label: 'Books', routerLink: '/books' },
                  { label: 'Cards', routerLink: '/cards' },
                  { label: 'Movies', routerLink: '/movies' },
                  { label: 'Videogames', routerLink: '/videogames'}
                ];
    } else {
      // Overwrite links to just be home
      this.links = [
        { label: 'Home', routerLink: '/home' }
      ];
    }
  }
  
  checkLogIn(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
    this.updateLinks();

    const user = this.userHelper.getUserSession();
      if (this.isLoggedIn && user) {
        this.username = JSON.parse(user).username;
      } else {
        this.username = '';
      }
  }

  logout() {
    this.userHelper.removeUserSession();
    this.router.navigate(['/home']);
  }
}