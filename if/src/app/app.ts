import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('if');

  isLoggedIn= 'false';

  mark= 45;

  Showbox= true;

  toggleBox(){
    this.Showbox= !this.Showbox;
  }

  age= 0;

  UpdateAge(val: string){
    this.age= Number(val);
  }
}
