import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonalInfo } from './personal-info/personal-info';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PersonalInfo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}