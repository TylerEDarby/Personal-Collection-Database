import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie';
import { MovieLibrary } from '../models/movieLibrary';
 

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  updateTitle(movie: Movie) {
    return this.http.put<Movie>(this.urlPrefix + '/updateTitle', movie);
  }
  urlPrefix: string = `${environment.apiPrefix}/movies`;
  
  constructor(private http: HttpClient) { }

  getByUser(id: number): Observable<MovieLibrary> {
    return this.http.get<MovieLibrary>(this.urlPrefix + '/getByUser?id=' + id);
  }

  add(libraryId: number, movie: Movie) {
    return this.http.post<Movie>(this.urlPrefix + '/add?libraryId=' + libraryId, movie);
  }
  
  updateQuantity(movie: Movie) {
    return this.http.put<Movie>(this.urlPrefix + '/updateQuantity', movie);
  }

  deleteMovie(movie: Movie) {
    const headers: HttpHeaders = new HttpHeaders({ "Content-Type": "application/json" });
    const options = { headers: headers, body: movie };

    return this.http.delete(this.urlPrefix, options);
  }

}
