import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('elseif');

  status: string='der';

  marks: number = 0;

  PutNum(value: any){
    this.marks= Number(value);
  }
}
