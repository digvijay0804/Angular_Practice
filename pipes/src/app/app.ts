import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pipes');

  lName= 'digvijay';
  uName= 'DIGVIJAY';

  today= new Date();

  amount= 2500;

  per= 0.35;
}
