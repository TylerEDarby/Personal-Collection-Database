import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card } from '../models/card';
import { CardLibrary } from '../models/cardLibrary';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  urlPrefix: string = `${environment.apiPrefix}/cards`;

  constructor(private http: HttpClient) { }

  getByUser(id: number): Observable<CardLibrary> {
    return this.http.get<CardLibrary>(this.urlPrefix + '/getByUser?id=' + id);
  }

  add(libraryId: number, card: Card) {
    return this.http.post<Card>(this.urlPrefix + '/add?libraryId=' + libraryId, card);
  }

  updateQuantity(card: Card) {
    return this.http.put<Card>(this.urlPrefix + '/updateQuantity', card);
  }

  deleteCard(card: Card) {
    const headers: HttpHeaders = new HttpHeaders({ "Content-Type": "application/json" });
    const options = { headers: headers, body: card };

    return this.http.delete(this.urlPrefix, options);
  }

  updateName(card: Card) {
    return this.http.put<Card>(this.urlPrefix + '/updateName', card);
  }
}
