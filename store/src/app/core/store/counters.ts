import { Injectable,signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterStore {
  count = signal(0);

  Increment(){
    this.count.update(value => value +1);
  }
  Decrement(){
    this.count.update(value => value - 1);
  }
  Reset(){
    this.count.set (0);
  }

}
