import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);

  getUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users/1');
  }

  createUser(user: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/users', user);
  }

  updateUser(user: any) {
    return this.http.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, user);
  }

  deleteUser(userId: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
  } 
}