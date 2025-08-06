import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ],
})
export class OrderHistoryPage implements OnInit {
  orders: Order[] = [];
  currentLang: string = 'ua';

  @Output() orderSelected = new EventEmitter<Order>();

  constructor(private orderService: OrderService, private translate: TranslateService) {}

  ngOnInit() {
    this.orders = this.orderService.getOrders();
    this.currentLang = this.translate.currentLang || this.translate.getDefaultLang() || 'ua';
    this.translate.onLangChange.subscribe(event => {
      this.currentLang = event.lang;
    });
  }

  selectOrder(order: Order) {
    this.orderSelected.emit(order);
  }

  getOrderTitle(order: Order): string {
    if (!order.items || order.items.length === 0) return '';

    const pizzaNames = order.items.map(item => {
      return this.translate.instant(`pizzas.${this.getPizzaIndexByName(item.name)}.name`);
    });

    return pizzaNames.join(', ');
  }

  getPizzaIndexByName(name: string): number {
    const pizzaMap: Record<string, number> = {
      Margarita: 0,
      Pepperoni: 1,
      Hawaiian: 2,
      "Four Cheese": 3,
      Vegetarian1: 4,
    };

    return pizzaMap[name] ?? 0; 
  }
}
