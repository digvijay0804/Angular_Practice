import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('counter_app');

  count : number = 0;

  handleAdd(){
    this.count++;
  }
  handleSub(){
    if (this.count > 0){ 
    this.count--;
    }
  }
  handleReset(){
    this.count = 0;
  }
}
