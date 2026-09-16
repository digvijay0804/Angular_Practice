import { Component, signal } from '@angular/core';
import {  CounterStore } from './core/store/counters';
import {  UserStore } from './core/store/user';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('store');

  // constructor(public CounterStore: CounterStore) {}

  constructor(public UserStore: UserStore) {}

}