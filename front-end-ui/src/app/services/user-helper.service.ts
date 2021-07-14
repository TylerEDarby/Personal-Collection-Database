import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserHelperService {
  readonly authToken = 'seshat_auth_token';
  localStorage: Storage;

  isLoggedInSubject = new Subject<boolean>();

  constructor(private router: Router) {
    this.localStorage = window.localStorage;
  }

  createUserSession(user: User) {
    this.localStorage.setItem(this.authToken,  JSON.stringify(user));
    this.isLoggedInSubject.next(true);
  }

  getUserSession() {
    return this.localStorage.getItem(this.authToken);
  }

  removeUserSession() {
    this.localStorage.removeItem(this.authToken);
    this.isLoggedInSubject.next(false);
    this.router.navigate(['/home']);
  }
}
