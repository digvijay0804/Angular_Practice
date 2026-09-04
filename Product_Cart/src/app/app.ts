import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { single } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('Product_Cart');

  user= signal({
    name: '',
    email: ''
  });

  products = signal ([
  {
    name: 'Laptop',
    price: 10000,
    quantity: 0
  },
  {
    name: 'Mobile',
    price: 5000,
    quantity: 0
  },
  {
    name: 'SmartWatch',
    price: 1000,
    quantity: 0
  }]);

  


  increaseQuantity(product: any) {
  this.products.update(products => {
    product.quantity++;
    return [...products];

  });
}
  decreaseQuantity(product: any) {
  if (product.quantity > 0) {
    this.products.update(products => {
    product.quantity--;
    return [...products];
  });
} }
cartTotal = computed(() => {
  return this.products().reduce((total, product) => {
    return total + (product.price * product.quantity);
  }, 0);
});

orderMessage = signal('');
orderConform(){
  this.orderMessage.set('Order Confirmed Successfully....');
}
}