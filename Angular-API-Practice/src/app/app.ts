import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  user: any = {};
  userdata: any = 
  {
    id: 1,
    name: 'Digvijay Thorat',
    email: 'digvijay@gmail.com'
    

  
  };
 

  protected readonly title = signal('Angular-API-Practice');

  testObservable() {
  const message$ = new Observable((observer) => {
    observer.next('Hello');
    observer.next('Welcome');
    observer.next('Angular');});

  message$.subscribe((data) => {
    console.log(data);});}

  private userService = inject(UserService);

 

  getUser() {
    this.userService.getUser().subscribe({
      next: (data) => {
        this.user = data;
        this.userdata = data;
        console.log(data);
      },
      error: (error) => {
        console.error('Error fetching user:', error);
      }
    });
  }

  newuser() {
    this.userService.createUser(this.userdata).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.error('Error creating user:', error);
      }
    });
  }

  updateuser() {
    this.userService.updateUser(this.userdata).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.error('Error updating user:', error);
      }
    });
  }

  deleteuser() {
    this.userService.deleteUser(this.userdata.id).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.error('Error deleting user:', error);
      }
    });
  }
}