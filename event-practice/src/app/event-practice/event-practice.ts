import { Component } from '@angular/core';

@Component({
  selector: 'app-event-practice',
  imports: [],
  templateUrl: './event-practice.html',
  styleUrl: './event-practice.css',
})
export class EventPractice {
  OnClick(){
    console.log("Button Click");
  }

  OnInput(event: Event) {
  console.log((event.target as HTMLInputElement).value);
  }

  OnKeyUp(event: KeyboardEvent){
    console.log(event.key);
  }

  OnMovseOver(){
    console.log("MouseEvent");
  }
  OnFocus() {
  console.log("Input focused");
}
OnBlur() {
  console.log("Input lost focus");
}
} 
