import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { single } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('signal-datatype');

  count= signal <number>(10);
  name= signal <string>('sahil');
  isAdmin= signal <boolean>(true);

  numbers= signal<number[]>([1,2,3,4,5,6,7]);
  user= signal<{name: string,age:number}>
  ({
    name: 'sahil',
    age: 20
  })

  reset(){
    this.numbers.set([10,20,30,40]);
  }

  update(){
    this.numbers.update(arr =>[...arr,100]);
  }
}
