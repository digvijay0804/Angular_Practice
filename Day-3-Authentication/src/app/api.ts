import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private http = inject(HttpClient);

  getUser(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  
}
