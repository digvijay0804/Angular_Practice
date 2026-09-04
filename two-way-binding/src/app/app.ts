import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('two-way-binding');

  // name = signal('Digvijay');

  user = signal <{name: string; age: number}>
  ({
    name: 'Digvijay',
    age: 22
  }); 
  updateName(value:string){
    this.user.update(user=>({...user, name:value}))
  }
  updateAge(){
    this.user.update(user=>({...user, age: user.age +1 }))
  }
}
