import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: MainComponent,
    children: [
      {
        path: 'addbook',
        loadChildren: () => import('./components/add-book-modal/add-book-modal.module').then(m => m.AddBookModalModule)
      }
    ],
  },
  {
    path: '**', redirectTo: '/dashboard', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
