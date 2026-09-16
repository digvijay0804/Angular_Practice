import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  imports: [Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Day-2');

  message$: Observable<string>;
  message = '';

  promiseMessage = '';

  numbers$ = of(1, 2, 3, 4, 5);
  numbers: number[] = [];
  studentName = 'Digvijay Thorat';
  childMessage = '';

  constructor () {
    this.message$ = new Observable<string>((observer) => {
        observer.next('Hello from Observable!');
        observer.complete();
    });
    this.message$.subscribe((message) => {
      this.message = message;
    });

    this.numbers$.subscribe((numbers) => {
      this.numbers.push(numbers);
    });
   const promiseData = Promise.resolve('Hello from Promise!');

promiseData.then((result) => {
  this.promiseMessage = result;
  console.log(result);
});
}
 
  
  
}
