import { Component } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  pizzas: Pizza[] = [
    { id: 1, name: 'Margarita', description: 'Класична піца з томатним соусом, моцарелою та базиліком.', price: 150, img: 'assets/img/margarita.jpg' },
    { id: 2, name: 'Pepperoni', description: 'Піца з гострою пепероні, сиром та томатним соусом.', price: 180, img: 'assets/img/pepperoni.jpg' },
    { id: 3, name: 'Hawaiian', description: 'Піца з шинкою, ананасами та сиром моцарела.', price: 170, img: 'assets/img/hawaiian.jpg' },
    { id: 4, name: 'Four Cheese', description: 'Піца з чотирма видами сиру: моцарела, пармезан, горгонзола, чеддер.', price: 200, img: 'assets/img/fourcheese.jpg' },
    { id: 5, name: 'Vegetarian', description: 'Піца з овочами: помідори, перець, оливки, цибуля, гриби.', price: 160, img: 'assets/img/vegetarian.jpg' }
  ];

  cart: Pizza[] = [];

  constructor(private alertController: AlertController) {}

  addToCart(pizza: Pizza) {
    this.cart.push(pizza);
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }

  getTotal(): number {
    return this.cart.reduce((sum, p) => sum + p.price, 0);
  }

  async goToCheckout() {
    const pizzaList = this.cart.map(p => `${p.name} — ${p.price} ₴`).join('\n');
    const total = this.getTotal();

    const alert = await this.alertController.create({
      header: 'Оплата',
      subHeader: `Підсумок замовлення:`,
      message: `${pizzaList}\n\nВсього: ${total} ₴`,
      buttons: [
        {
          text: 'Відмінити',
          role: 'cancel',
        },
        {
          text: 'Підтвердити',
          handler: () => {
            this.cart = []; // Очищуємо кошик після оплати
          }
        }
      ]
    });

    await alert.present();
  }
}
