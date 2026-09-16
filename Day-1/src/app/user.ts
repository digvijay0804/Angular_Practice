import { Injectable ,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { email } from '@angular/forms/signals';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  postUser(){
    const user = {
      id: 11,
      name: "parnav Thorat",
      email: "paranavhorat@gmail.com"
    };
    
    return this.http.post(
    'https://jsonplaceholder.typicode.com/users',
    user
  );
  }
  getUser() {
    return {
      id: 1,
      name: 'Digvijay Thorat',
      email: 'digvijay.thorat@gmail.com'

    };
  }
  getCourse() {
    return {
      name: 'Angular',
      duration: '3 months'
    };
  }
  private http = inject(HttpClient);
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
