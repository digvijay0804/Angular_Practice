import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('signal_from');
  name =signal('');
  email = signal('');
  message = signal('');

  submitFrom(){
    console.log(`Name: ${this.name()}, Email: ${this.email()}`)
     this.message.set(
      `User ${this.name()} created successfully!`
    );
  }

}
