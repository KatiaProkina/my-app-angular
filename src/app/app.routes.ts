import { Routes } from '@angular/router';
import { Books } from './pages/books';
import { BookDetail } from './book-card/book-detail/book-detail';

export const routes: Routes = [
  { path: '', component: Books },
  { path: 'books', component: Books },
  { path: 'books/:id', component: BookDetail },
];
