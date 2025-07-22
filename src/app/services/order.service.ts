import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orders: Order[] = [];

  constructor() {
    // Якщо хочеш зберігати в localStorage:
    const saved = localStorage.getItem('orders');
    if (saved) {
      this.orders = JSON.parse(saved);
    }
  }

  addOrder(order: Order) {
    this.orders.push(order);
    localStorage.setItem('orders', JSON.stringify(this.orders));
  }

  getOrders(): Order[] {
    return this.orders;
  }

  clearOrders() {
    this.orders = [];
    localStorage.removeItem('orders');
  }
}
