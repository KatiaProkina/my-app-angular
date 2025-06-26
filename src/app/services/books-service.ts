import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export type Book = {
  id: string;
  title: string;
  author: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  imageUrl: string;
  description: string;
  year: number;
  publisher: string;
  isbn: string;
  pages: number;
};

@Injectable({ providedIn: 'root' })
export class BookService {
  private books: Book[] = [
    {
      id: '1',
      title: 'Angular на примерах',
      author: 'Станислав Пономарев',
      price: 422,
      oldPrice: 530,
      discount: 20,
      imageUrl: '/book.jpg',
      description: 'Angular на примерах',
      year: 2015,
      publisher: 'АСТ',
      isbn: 'IHKJJ-0345-BKBK',
      pages: 355,
    },
    {
      id: '2',
      title: 'Основы TypeScript',
      author: 'Адам Фримен',
      price: 350,
      oldPrice: 700,
      discount: 50,
      imageUrl: '/ts.jpg',
      description: 'Основы TypeScript',
      year: 2015,
      publisher: 'АСТ',
      isbn: 'IHKJJ-0345-BKBK',
      pages: 355,
    },
  ];

  getBooks(searchStr: string): Observable<Book[]> {
    return of(this.books).pipe(
      delay(100), // имитация задержки, как будто от API
      map((books: Book[]) =>
        books.filter((book: Book) =>
          book.title.toLowerCase().includes(searchStr.toLowerCase())
        )
      )
    );
  }

  // 📘 Поиск книги по id
  getBookById(id: string): Observable<Book | undefined> {
    return of(this.books.find((b) => b.id === id)).pipe(delay(100));
  }
}
// переделать сервис чтобы возвращал Observable с массивом книг
