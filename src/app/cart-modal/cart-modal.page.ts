import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  ModalController,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonButtons,
  IonNote,
  IonIcon,
  IonAvatar,
  IonBadge
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { addIcons } from 'ionicons';
import { close, trash, cartOutline, remove, add } from 'ionicons/icons';
import { CartItem } from '../models/order.model';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonButtons,
    IonNote,
    IonIcon,
    IonAvatar
  ]
})
export class CartModalPage {
  private modalCtrl = inject(ModalController);
  private animationCtrl = inject(AnimationController);
  private translate = inject(TranslateService);

  @Input() cartItems: CartItem[] = [];
  @Input() total: number = 0;
  defaultCurrency = '₴';

  constructor() {
    addIcons({ close, trash, cartOutline, remove, add });
  }

  async dismiss(refresh: boolean = false) {
    await this.modalCtrl.dismiss({
      refresh: refresh
    });
  }

  removeItem(index: number) {
    this.animateRemove(index);
    this.cartItems.splice(index, 1);
    this.calculateTotal();
  }

  decreaseQuantity(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
      this.calculateTotal();
    } else {
      this.removeItem(this.cartItems.indexOf(item));
    }
  }

  increaseQuantity(item: CartItem) {
    item.quantity++;
    this.calculateTotal();
  }

  private calculateTotal() {
    this.total = this.cartItems.reduce(
      (sum, item) => sum + (item.pizza.price * item.quantity), 
      0
    );
  }

  private async animateRemove(index: number) {
    const element = document.querySelector(`ion-item:nth-child(${index + 1})`);
    if (element) {
      const animation = this.animationCtrl.create()
        .addElement(element)
        .duration(300)
        .fromTo('opacity', '1', '0.1')
        .fromTo('transform', 'translateX(0)', 'translateX(-100%)');

      await animation.play();
    }
  }

  checkout() {
    console.log('Proceeding to checkout with:', this.cartItems);
    this.dismiss(true);
  }

  getCurrency(): string {
    return this.cartItems.length > 0 ? this.cartItems[0].pizza.currency : this.defaultCurrency;
  }
}
