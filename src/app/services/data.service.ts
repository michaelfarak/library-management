import { Injectable } from '@angular/core';
import { Book } from '../models/book.interface';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  book!: Book;
  private bookSource$ = new BehaviorSubject<Book>(this.book);
  newBook$ = this.bookSource$.asObservable();

  bookListChanged(book: Book): void {
    this.bookSource$.next(book);
  }

  bookRemoved(book: Book): void {
    this.bookSource$.next(book);
  }
}

