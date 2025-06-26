import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchService } from './services/search-service';
import { Registration } from './auth/registration/registration';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, Registration],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  search = '';

  constructor(private searchService: SearchService) {}

  onSearchChange(value: string) {
    this.search = value;
    this.searchService.setSearch(value);
  }

  showRegistration = false;

  openRegistration() {
    this.showRegistration = true;
  }
  closeRegistration() {
    this.showRegistration = false;
  }
}
