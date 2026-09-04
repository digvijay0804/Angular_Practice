import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('signals');

  count= signal(0);

  value= 20;


  increment(){
    this.count.update( c => c + 1);
  }
  decrement(){
    this.count.update( c => c - 1);
  }
  reset(){
    this.count.set(0) ;
  }

}
