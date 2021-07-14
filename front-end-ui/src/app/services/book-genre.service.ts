import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BookGenre } from '../models/bookGenre';

@Injectable({
  providedIn: 'root'
})
export class BookGenreService {
  urlPrefix: string = `${environment.apiPrefix}/bookGenres`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<BookGenre[]> {
    return this.http.get<BookGenre[]>(this.urlPrefix);
  }
}
