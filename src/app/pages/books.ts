import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookCard } from '../book-card/book-card';
import { SearchService } from '../services/search-service';
import { Observable, Subscription, switchMap } from 'rxjs';
import { Book, BookService } from '../services/books-service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books',
  imports: [FormsModule, BookCard, CommonModule],
  templateUrl: './books.html',
  styleUrl: './books.scss',
})
export class Books {
  books$: Observable<Book[]>;

  constructor(
    private bookService: BookService,
    private searchService: SearchService
  ) {
    this.books$ = this.searchService.search$.pipe(
      switchMap((searchStr) => this.bookService.getBooks(searchStr)),
      takeUntilDestroyed()
    );
  }

  private sub!: Subscription;
}
