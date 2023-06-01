import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddBookModalComponent } from './add-book-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddBookModalRoutingModule } from './add-book-modal-routing.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [AddBookModalComponent],
  imports: [
    CommonModule,
    AddBookModalRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: []
})
export class AddBookModalModule { }
