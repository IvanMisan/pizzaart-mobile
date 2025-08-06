import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-popover',
  templateUrl: './menu-popover.component.html',
})
export class MenuPopoverComponent {
  constructor(private popoverCtrl: PopoverController, private router: Router) {}

  goToOrderHistory() {
    this.popoverCtrl.dismiss();
    this.router.navigate(['/order-history']);
  }
}