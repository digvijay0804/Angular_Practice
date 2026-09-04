import { Component, signal } from '@angular/core';
import { ValueChangeEvent } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo1');

  name: string = "";
  city: string ="";
  email: string ="";

  UpdateName(value: string){
    this.name= value;
  }

  getEmail(value: string){
    this.email=value;
  }
}
