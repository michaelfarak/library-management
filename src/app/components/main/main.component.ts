import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs/internal/Subscription';
import { Book } from 'src/app/models/book.interface';
import { BooksService } from 'src/app/services/books.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  dataSource = new MatTableDataSource<Book>()
  bookList: Book[] = [];
  book!: Observable<Book>;
  subscription!: Subscription;
  constructor(private bookService: BooksService, public dataService: DataService){}


  ngOnInit(): void {

    this.dataService.newBook$.subscribe(book => {
      if(book){
        this.bookList.push(book);
        this.dataSource = new MatTableDataSource<Book>(this.bookList);
      }
    })

    this.bookService.getBooks().subscribe(books => {
      this.bookList = books;
      this.dataSource = new MatTableDataSource<Book>(this.bookList);
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
