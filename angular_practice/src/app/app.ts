import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Practice } from "./practice/practice";

@Component({
  selector: 'app-root',
  imports: [Practice],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_practice');
}
