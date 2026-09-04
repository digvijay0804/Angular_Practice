import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('forloop');

  // items= ['Sahil','Panu','Shree','Harshu'];

  // users= [
  //   {name: 'Sahil', age: 22},
  //   {name: 'Panu', age: 20},
  //   {name: 'Harshu', age: 14},
  //   {name: 'Shree', age: 12}
  // ]

  numbers= [10,20,15,36,40,91,11];
}
