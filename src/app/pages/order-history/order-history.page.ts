import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Order } from 'src/app/models/order.model';  // Убедитесь, что путь правильный

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule], // Обязательно импортируем необходимые модули
})
export class OrderHistoryPage {
  orders: Order[] = [];

  constructor() {
    // Здесь можно получить заказы, например через сервис
    // Для теста можно добавить моковые данные
    this.orders = [
      {
        id: 1,
        date: new Date(),
        total: 500,
        items: [
          { name: 'Маргарита', price: 250, quantity: 1 },
          { name: 'Пепперони', price: 250, quantity: 1 }
        ],
      }
    ];
  }
}
