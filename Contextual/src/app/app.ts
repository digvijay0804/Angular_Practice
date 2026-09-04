import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Contextual');

  // items= ['sahil','panu','shree','harshu','bhau','nana'];

  number= [1,2,3,4,5,6,7,8,9,10];
}
