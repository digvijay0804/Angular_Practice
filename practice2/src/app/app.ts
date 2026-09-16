import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practice2');

  username = signal('Digvijay Thorat');

  changeName() {
  this.username.set('Angular Developer');
}
}
