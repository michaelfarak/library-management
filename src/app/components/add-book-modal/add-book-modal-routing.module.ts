import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { DialogEntryComponent } from './add-book-modal.component';

const routes: Routes = [{path: '', component: DialogEntryComponent}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddBookModalRoutingModule {}
