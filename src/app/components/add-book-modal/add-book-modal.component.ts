import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-book-modal',
  templateUrl: './add-book-modal.component.html',
  styleUrls: ['./add-book-modal.component.scss']
})
export class AddBookModalComponent {
  @Output() newBookAdded: EventEmitter<Book> = new EventEmitter<Book>();
  book!: Book;
  bookForm = new FormGroup({
    title: new FormControl<string>('', Validators.required),
    author: new FormControl<string>('', Validators.required),
    year: new FormControl<string>(''),
    description: new FormControl<string>('')
  })

  constructor(public dialogRef: MatDialogRef<AddBookModalComponent>,
              private dataService: DataService
              ){
                this.book = dataService.book;
              }


  onSubmit(form: any): void {
    this.dataService.bookListChanged(form);
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}


@Component({
  template: ''
})
export class DialogEntryComponent {
  constructor(public dialog: MatDialog, private router: Router,
    private route: ActivatedRoute) {
    this.openDialog();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddBookModalComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}
