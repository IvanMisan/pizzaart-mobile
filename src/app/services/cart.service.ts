import { Injectable } from '@angular/core';
import { OrderItem } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: OrderItem[] = [];

  constructor() {}

  getItems(): OrderItem[] {
    return this.cart;
  }

  addItem(item: OrderItem) {
    const existing = this.cart.find(p => p.name === item.name);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      this.cart.push({ ...item });
    }
  }

  removeItem(item: OrderItem) {
    this.cart = this.cart.filter(p => p.name !== item.name);
  }

  clearCart() {
    this.cart = [];
  }
}
