import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Practice1');

  isLoggedIn = false;

  marks= 0;
  UpdateMark(val:any){
    this.marks=Number(val);
  }

  age = 35;
  hasId = true;

  role = "";

  UpdateRole(val:string){
    this.role=val;
  }

  students = ["Rahul", "Amit", "Sneha", "Priya"];
}
