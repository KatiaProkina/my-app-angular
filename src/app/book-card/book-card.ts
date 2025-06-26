import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.html',
  standalone: true,
  styleUrl: './book-card.scss',
})
export class BookCard {
  @Input() title!: string;
  @Input() price!: number;
  @Input() author!: string;
  @Input() imageUrl!: string;
  @Input() oldPrice?: number;
  @Input() discount?: number;
  @Input() id!: string;
  constructor(private router: Router) {}

  openDetail() {
    this.router.navigate(['/books', this.id]);
  }
}
