import { Component, NgModule, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-practice',
  imports: [FormsModule],
  templateUrl: './practice.html',
  styleUrl: './practice.css',
})
export class Practice {
  studentName= 'Digvijay Thorat';
  courseName= 'M.Sc Computer Science';
  message= '';
  type= '';

  imageUrl= "https://www.w3schools.com/html/img_girl.jpg";

  ShowMessage(){
    this.message = 'Welcome to Angular Practice';
  }

  Show(event: Event) {
  const input = event.target as HTMLInputElement;
  this.type = input.value;
  }

  username = '';

  count= 0;

  Increment(){
    if(this.count<10){
    this.count++;
    }

  }
  Decrement(){
    if(this.count>0){
    this.count--;
    }
  }
   Reset(){
    this.count = 0;
  }
}
