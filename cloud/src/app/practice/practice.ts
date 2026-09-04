import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { submit } from '@angular/forms/signals';

@Component({
  selector: 'app-practice',
  imports: [FormsModule],
  templateUrl: './practice.html',
  styleUrl: './practice.css',
})
export class Practice {
  username= "Sahil";
  course= 'cloud';
  div= 'A';
  a =10;
  b =20;
  getMessage() {
    return 'shruti'; 
  }
  imageUrl= "https://th.bing.com/th/id/OIP.ezbTt21LyLKWJ0aeOOH-gAHaE8?w=272&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3";
  imageWidth = 300;

  showMessage(){
    submit
  }


  count= 0;
  increment(){
    this.count++;
  }
  decrement(){
    this.count--;
  }
  getValue(event: Event){
    console.log(event);
  }

  signalCount = signal(0);

  changeCount() {
  this.signalCount.set(5);
}

}
