import { Component, signal, effect} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('effect');

  count= signal(0);

  constructor(){
    effect (() => {
      console.log('Count changed:', this.count());
    }
  )
  }
  increment() {
  this.count.set(this.count() + 1);
}
}
