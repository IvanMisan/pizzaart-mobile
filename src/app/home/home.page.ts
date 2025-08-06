import { Component, inject } from '@angular/core';
import { IonicModule, AlertController, PopoverController, MenuController, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { LanguagePopoverComponent } from '../language-popover/language-popover.component';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TranslateModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  private cartService = inject(CartService);
  private alertController = inject(AlertController);
  private translate = inject(TranslateService);
  private popoverCtrl = inject(PopoverController);
  private menuCtrl = inject(MenuController);
  private router = inject(Router);
  private toastCtrl = inject(ToastController);

  pizzas: any[] = [];
  currentLang = 'en';

  private imgPaths = [
    'assets/img/margarita.jpg',
    'assets/img/pepperoni.jpg',
    'assets/img/hawaiian.jpg',
    'assets/img/fourcheese.jpg',
    'assets/img/vegetarian.jpg',
  ];
  private prices = [150, 180, 170, 200, 160];

  constructor() {
    this.initializeLanguage();
  }

  private initializeLanguage() {
    this.translate.addLangs(['en', 'pl', 'ua']);
    this.translate.setDefaultLang(this.currentLang);
    this.translate.use(this.currentLang);
    this.loadPizzas();

    this.translate.onLangChange.subscribe(() => {
      this.currentLang = this.translate.currentLang || 'en';
      this.loadPizzas();
    });
  }

  private loadPizzas() {
    this.translate.getTranslation(this.currentLang).subscribe({
      next: (translations: any) => {
        const pizzas = translations?.pizzas;
        this.pizzas = Array.isArray(pizzas) 
          ? pizzas.map((pizza: any, index: number) => ({
              id: index + 1,
              name: pizza.name,
              description: pizza.description,
              img: this.imgPaths[index] || 'assets/img/default.jpg',
              price: this.prices[index] || 100,
            }))
          : [];
      },
      error: (error) => {
        console.error('Error loading pizzas:', error);
        this.pizzas = [];
      }
    });
  }

  async openLanguagePopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: LanguagePopoverComponent,
      event: ev,
      translucent: true,
    });
    
    const { data } = await popover.onDidDismiss();
    if (data) {
      this.switchLang(data);
    }
    
    await popover.present();
  }

  private switchLang(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
  }

  async addToCart(pizza: any) {
    this.cartService.addItem({
      name: pizza.name,
      price: pizza.price,
      quantity: 1,
    });
    
    const toast = await this.toastCtrl.create({
      message: `${pizza.name} added to cart`,
      duration: 1500,
      position: 'top'
    });
    await toast.present();
  }

  get cartItems() {
    return this.cartService.getItems();
  }

  get cartTotal() {
    return this.cartService.getTotal();
  }

  async goToCheckout() {
    if (this.cartService.getItems().length === 0) {
      const toast = await this.toastCtrl.create({
        message: 'Your cart is empty',
        duration: 1500,
        position: 'top'
      });
      await toast.present();
      return;
    }

    const translations = await this.translate.get([
      'checkout.title',
      'checkout.subtitle',
      'checkout.confirm',
      'checkout.cancel',
      'checkout.total',
    ]).toPromise();

    const alert = await this.alertController.create({
      header: translations?.['checkout.title'] || 'Checkout',
      subHeader: translations?.['checkout.subtitle'] || 'Order summary',
      message: `${this.cartItems.map(p => `${p.name} × ${p.quantity} — ${p.price * p.quantity} ₴`).join('\n')}
                \n\n${translations?.['checkout.total'] || 'Total'}: ${this.cartTotal} ₴`,
      buttons: [
        { 
          text: translations?.['checkout.cancel'] || 'Cancel', 
          role: 'cancel' 
        },
        { 
          text: translations?.['checkout.confirm'] || 'Confirm', 
          handler: () => this.cartService.clearCart()
        },
      ],
    });

    await alert.present();
  }

  openOrderHistory() {
    this.menuCtrl.close();
    this.router.navigate(['/order-history']);
  }
}