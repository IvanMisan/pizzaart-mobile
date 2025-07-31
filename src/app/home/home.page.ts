import { Component } from '@angular/core';
import { IonicModule, AlertController, PopoverController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { LanguagePopoverComponent } from '../language-popover/language-popover.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TranslateModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  pizzas: any[] = [];
  cart: any[] = [];
  currentLang = 'en';

  constructor(
    private alertController: AlertController,
    private translate: TranslateService,
    private popoverCtrl: PopoverController
  ) {
    this.translate.addLangs(['en', 'pl', 'ua']);
    this.translate.setDefaultLang(this.currentLang);
    this.translate.use(this.currentLang);
    this.loadPizzas();
  }

  async openLanguagePopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: LanguagePopoverComponent,
      event: ev,
      translucent: true,
    });
    popover.onDidDismiss().then((res) => {
      if (res.data) {
        this.switchLang(res.data);
      }
    });
    await popover.present();
  }

  switchLang(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
    this.loadPizzas();
  }

  loadPizzas() {
    this.translate.get('pizzas').subscribe((translatedPizzas: any[]) => {
      const imgPaths = [
        'assets/img/margarita.jpg',
        'assets/img/pepperoni.jpg',
        'assets/img/hawaiian.jpg',
        'assets/img/fourcheese.jpg',
        'assets/img/vegetarian.jpg',
      ];

      this.pizzas = translatedPizzas.map((pizza, index) => ({
        id: index + 1,
        name: pizza.name,
        description: pizza.description,
        img: imgPaths[index],
        price: [150, 180, 170, 200, 160][index],
      }));
    });
  }

  addToCart(pizza: any) {
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

    const translations = await this.translate.get([
      'checkout.title',
      'checkout.subtitle',
      'checkout.confirm',
      'checkout.cancel',
      'checkout.total',
    ]).toPromise();

    const alert = await this.alertController.create({
      header: translations['checkout.title'],
      subHeader: translations['checkout.subtitle'],
      message: `${pizzaList}\n\n${translations['checkout.total']}: ${total} ₴`,
      buttons: [
        { text: translations['checkout.cancel'], role: 'cancel' },
        { text: translations['checkout.confirm'], handler: () => { this.cart = []; } },
      ],
    });

    await alert.present();
  }
}