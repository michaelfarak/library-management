import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Book } from 'src/app/models/book.interface';
import { BooksService } from 'src/app/services/books.service';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-library-dashboard',
  templateUrl: './library-dashboard.component.html',
  styleUrls: ['./library-dashboard.component.scss']
})
export class LibraryDashboardComponent implements AfterViewInit{
  @Input() dataSource: MatTableDataSource<Book> = new MatTableDataSource<Book>();
  displayedColumns: string[] = ['title', 'author', 'year', 'actions']

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator
  @ViewChild(MatSort, { static: true }) sort!: MatSort // TODO fix the non working sorting behavior

  constructor(private booksService: BooksService, public dialog: MatDialog) {}

  ngAfterViewInit(): void {
    setTimeout(()=> {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
   }

   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openBookDetails(book: Book): void {
    const dialogRef = this.dialog.open(BookDetailsComponent, {
      data: book,
      width: '400px',
    })

    dialogRef.afterClosed().subscribe(() => {
      console.log('Modal closed');
    })
  }

  editBookDetails(book: Book): void {
    //TODO, lack of time
  }

  removeBook(book: Book): void {
    //TODO, lack of time
  }
}
