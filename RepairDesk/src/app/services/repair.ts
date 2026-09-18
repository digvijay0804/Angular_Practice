import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepairService {

  repairs: any[] = [];

  constructor() {
    const savedRepairs = localStorage.getItem('repairs');

    if (savedRepairs) {
      this.repairs = JSON.parse(savedRepairs);
    }
  }

  saveRepairs() {
    localStorage.setItem('repairs', JSON.stringify(this.repairs));
  }

}