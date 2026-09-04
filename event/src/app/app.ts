import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('event');

  handelclick(){
    console.log('wellcome');
  }

  ontyping(event: any){
    console.log("typed",event.target.value);
  }

  onkeyUp(event: any){
    console.log("key up Event", event.key)
  }

  OnHover(){
    console.log("drag ")
  }
  
  Onleave(){
    console.log("hovers side  ")
  }

  OnBlur(){
    console.log("Blur Event")
  }

}
