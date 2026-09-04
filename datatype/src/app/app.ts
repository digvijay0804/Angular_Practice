import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('datatype');

  // // value = 10;
  // value = 'sahil';

  // name: string= 10;

  handleclick(){
    let value;
    // value = 10;
    value ="sahil"
    console.log(value);

  }

  sum(a: number, b: number){
    console.log(a+b);
  }
}
