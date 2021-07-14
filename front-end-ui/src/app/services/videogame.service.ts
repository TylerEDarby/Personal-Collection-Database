import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Videogame } from '../models/videogame';
import { VideogameLibrary } from '../models/videogameLibrary';

@Injectable({
  providedIn: 'root'
})
export class VideogameService {
  urlPrefix: string = `${environment.apiPrefix}/videogames`;

  constructor(private http: HttpClient) { }
  updateTitle(videogame: Videogame) {
    return this.http.put<Videogame>(this.urlPrefix + '/updateTitle', videogame);
  }
  
  getByUser(id: number): Observable<VideogameLibrary> {
    return this.http.get<VideogameLibrary>(this.urlPrefix + '/getByUser?id=' + id);
  }

  add(libraryId: number, videogame: Videogame) {
    return this.http.post<Videogame>(this.urlPrefix + '/add?libraryId=' + libraryId, videogame);
  }

  updateQuantity(videogame: Videogame) {
    return this.http.put<Videogame>(this.urlPrefix + '/updateQuantity', videogame);
  }

  deleteVideogame(videogame: Videogame) {
    const headers: HttpHeaders = new HttpHeaders({ "Content-Type": "application/json" });
    const options = { headers: headers, body: videogame };

    return this.http.delete(this.urlPrefix, options);
  }

  
}
