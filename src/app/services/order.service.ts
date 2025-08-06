import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orders: Order[] = [
    {
      id: 1,
      date: new Date(),
      total: 500,
      items: [
        { name: 'Маргарита', price: 250, quantity: 1 },
        { name: 'Пепперони', price: 250, quantity: 1 },
      ],
    },
    {
      id: 2,
      date: new Date(Date.now() - 86400000),
      total: 750,
      items: [
        { name: 'Гавайская', price: 350, quantity: 1 },
        { name: 'Вегетарианская', price: 400, quantity: 1 },
      ],
    },
  ];

  getOrders(): Order[] {
    return this.orders;
  }

  addOrder(order: Order) {
    this.orders.push(order);
  }
}
