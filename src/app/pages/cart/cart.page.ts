import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { OrderService } from '../../services/order.service';
import { CartService } from '../../services/cart.service';
import { Order, OrderItem } from '../../models/order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
})
export class CartPage {
  constructor(
    private orderService: OrderService,
    private cartService: CartService,
    private router: Router
  ) {}

  get selectedPizzas(): OrderItem[] {
    return this.cartService.getItems();
  }

  get total(): number {
    return this.selectedPizzas.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  submitOrder() {
    if (this.selectedPizzas.length === 0) return;

    const order: Order = {
      id: Date.now(),
      items: this.selectedPizzas,
      total: this.total,
      date: new Date(),
    };

    this.orderService.addOrder(order); 
    this.cartService.clearCart();
    this.router.navigate(['/order-history']);
  }
}
