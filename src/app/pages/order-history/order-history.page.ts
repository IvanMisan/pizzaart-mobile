import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';  // <-- импорт

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  id: number;
  date: Date;
  total: number;
  items: OrderItem[];
}

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],  // <-- добавь сюда
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
})
export class OrderHistoryPage {
  orders: Order[] = [];

  constructor() {
    this.orders = [
      {
        id: 1,
        date: new Date(),
        total: 500,
        items: [
          { name: 'Маргарита', price: 250, quantity: 1 },
          { name: 'Пепперони', price: 250, quantity: 1 },
        ],
      },
    ];
  }
}
