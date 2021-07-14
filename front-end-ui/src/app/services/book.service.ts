import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';
import { BookLibrary } from '../models/bookLibrary';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  urlPrefix: string = `${environment.apiPrefix}/books`;

  constructor(private http: HttpClient) { }

  getByUser(id: number): Observable<BookLibrary> {
    return this.http.get<BookLibrary>(this.urlPrefix + '/getByUser?id=' + id);
  }

  add(libraryId: number, book: Book) {
    return this.http.post<Book>(this.urlPrefix + '/add?libraryId=' + libraryId, book);
  }

  updateQuantity(book: Book) {
    return this.http.put<Book>(this.urlPrefix + '/updateQuantity', book);
  }

  deleteBook(book: Book) {
    const headers: HttpHeaders = new HttpHeaders({ "Content-Type": "application/json" });
    const options = { headers: headers, body: book };

    return this.http.delete(this.urlPrefix, options);
  }

  updateTitle(book: Book) {
    return this.http.put<Book>(this.urlPrefix + '/updateTitle', book);
  }

  updateAuthor(book: Book) {
    return this.http.put<Book>(this.urlPrefix + '/updateAuthor', book);
  }
}
