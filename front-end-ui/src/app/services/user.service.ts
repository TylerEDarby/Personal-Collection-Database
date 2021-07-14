import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRequest } from '../models/login-request';
import { RegistrationRequest } from '../models/registration-request';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlBase: string;

  constructor(private http: HttpClient) {
    this.urlBase = `${environment.apiPrefix}/user`;
  }

  public getUsers() {
    return this.http.get<User[]>(`${this.urlBase}`);
  }

  public login(loginRequest: LoginRequest): Observable<User> {
    return this.http.post<User>(`${this.urlBase}/login`, loginRequest);
  }

  public registration(registrationRequest: RegistrationRequest): Observable<User> {
    return this.http.post<User>(`${this.urlBase}/register`, registrationRequest)
  }
}
