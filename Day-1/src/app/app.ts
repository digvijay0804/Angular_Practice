import { Component, signal, inject ,Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './user';
import { Product } from './product';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('UserServicels');

  userService = inject(UserService);

  user = this.userService.getUser();

   users: any;

constructor() {
  this.userService.getUsers().subscribe((data) => {
    this.users = data;
  });
}
  course = this.userService.getCourse();

  private productService = inject(Product);
  product = this.productService.getProduct();



}
