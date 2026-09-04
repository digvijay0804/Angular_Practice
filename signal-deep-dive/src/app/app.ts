import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('signal-deep-dive');

  count = signal(2);
  price = signal(5);

  // doubleCount = computed(() => this.count() *2);

  total = computed(() => this.count() * this.price());

  constructor (){
    effect (() =>{
      console.log("TotalCount",this.total());
    })
  }
  updateCount(){
    this.count.update(c => c +1)
  }
  updatePrice(){
    this.price.update(p => p +1)
  }
}
