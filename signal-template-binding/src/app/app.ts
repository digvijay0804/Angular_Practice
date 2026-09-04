import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('signal-template-binding');


  role= signal <'admin' | 'user'>('user');

  features= signal<string[]> ([
    "Daashborad",
    "Profile",
    "setting"
  ])

  makeAdmin(){
    this.role.set('admin');
    this.features.set([
      "Daashborad",
    "Profile",
    "setting",
    "Admin Panel",
    "user Managemenet"
    ])
  }
  makeUser(){
    this.role.set('user');
    this.features.set([
      "Daashborad",
    "Profile",
    "setting",
    
    ])
  }
}
