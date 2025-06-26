import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book, BookService } from '../../services/books-service';
import { Observable, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.scss',
  imports: [CommonModule],
})
export class BookDetail {
  book$!: Observable<Book | undefined>;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {
    this.book$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = params.get('id');
        return this.bookService.getBookById(id!);
      })
    );
  }

  goBack() {
    this.router.navigate(['/books']);
  }
}
