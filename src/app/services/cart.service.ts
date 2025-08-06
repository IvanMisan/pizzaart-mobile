import { Injectable } from '@angular/core';

export interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: OrderItem[] = [];

  getItems(): OrderItem[] {
    return [...this.cart];
  }

  addItem(item: OrderItem) {
    const existing = this.cart.find(p => p.name === item.name);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      this.cart.push({...item});
    }
  }

  removeItem(itemName: string) {
    this.cart = this.cart.filter(p => p.name !== itemName);
  }

  clearCart() {
    this.cart = [];
  }

  getTotal(): number {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
}