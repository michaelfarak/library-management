import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book.interface';

const json_books_files = '/assets/books.json';



// google books api implementation
const api_key = 'AIzaSyAOscSY9flSsATsFjmhAEMQiBOUStyMv2g';
const base_url = 'https://www.googleapis.com/books/v1/volumes'

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    // google books api implementation
    // const params = new HttpParams().set('key', api_key).set('q', 'random');
    // return this.http.get(`${base_url}`, {params})

    return this.http.get<Book[]>(json_books_files, {headers: {'Accept': 'application/json'}});

  }
}
