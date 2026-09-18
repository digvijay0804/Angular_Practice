import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Api } from './api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(private apiService: Api) {}

  ngOnInit(): void {
    this.apiService.getUser().subscribe({
      next: (data) => {
        console.log('API Response:', data);
      },
      error: (error) => {
        console.error('API Error:', error);
      }
    });
  }
}