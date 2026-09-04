import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('computed-signals');

  count= signal<number>(2);

  doubleCount= computed <number>(() =>this.count() *2);
  tripleCount= computed <number>(() =>this.count() *3);
  fourthCount= computed <number>(() =>this.count() *4);
  fivethCount= computed <number>(() =>this.count() *5);
  sixthCount= computed <number>(() =>this.count() *6);
  seventhCount= computed <number>(() =>this.count() *7);
  eighthCount= computed <number>(() =>this.count() *8);
  ninethCount= computed <number>(() =>this.count() *9);
  tenthCount= computed <number>(() =>this.count() *10);


  increment(){
    this.count.set(this.count()+1);
  }

  Firstname= signal<string>('Digvijay');
  Middelname= signal<string>('Sanjay');
  Lastname= signal<string>('Thorat');


  fullName = computed<string>(() => 
  `${this.Firstname()} ${this.Middelname()} ${this.Lastname()}`
);

price= signal<number[]> ([10,20,30,40,50,60,70,80,90,100,]);

total = computed <number>(() => {
  return this.price().reduce((acc, curr) => acc + curr, 0);
}
)
}
