import { Component, signal } from '@angular/core';
import { ShortPipePipe } from './pipe/short-pipe-pipe';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ShortPipePipe,CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('custom_pipe');

  fullName= 'Dgvijay Sanjay Thorat';
}
