import { Component,signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { count } from 'rxjs';

@Component({
  selector: 'app-student',
  imports: [FormsModule,],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  studentname= 'Digvijay Thorat';
  course= 'Msc computer Science';
  collage= 'bharti vidyapeeth pune'; 
  imageUrl = 'https://th.bing.com/th/id/OIP.gc9RfkVS_lnVRPwViC9xtwHaHa?w=163&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3';

  messge= '';

  showmessge() {
    this.messge='Wellcome Bappa';
  }
  count = signal(0);
  increment() {
   this.count.update(value => value + 1);
  }
  decrement() {
   this.count.update(value => value - 1);
  }
  
  value='';
  getValue(event: any){
    this.value = event.target.value;
  }
  students = ['Rahul', 'Amit', 'Sneha', 'Pooja'];
}
