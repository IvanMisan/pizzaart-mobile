import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule,
    RouterModule
  ],
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-split-pane>
        <ion-menu side="start" menuId="main-menu" contentId="main-content">
          <ion-header>
            <ion-toolbar>
              <ion-title>{{ 'menu.title' | translate }}</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            <ion-list>
              <ion-menu-toggle auto-hide="false" *ngFor="let item of menuItems">
                <ion-item 
                  button 
                  [routerLink]="item.link" 
                  lines="none"
                  routerDirection="root">
                  <ion-icon [name]="item.icon" slot="start"></ion-icon>
                  <ion-label>{{ item.title | translate }}</ion-label>
                </ion-item>
              </ion-menu-toggle>
            </ion-list>
          </ion-content>
        </ion-menu>
        <ion-router-outlet id="main-content"></ion-router-outlet>
      </ion-split-pane>
    </ion-app>
  `,
  styles: [`
    ion-menu ion-content {
      --background: var(--ion-item-background);
    }
  `]
})
export class AppComponent {
  menuItems = [
    { title: 'menu.home', link: '/', icon: 'home-outline' },
    { title: 'menu.history', link: '/order-history', icon: 'time-outline' },
    { title: 'menu.reviews', link: '/reviews', icon: 'chatbubble-outline' },
    { title: 'menu.profile', link: '/profile', icon: 'person-outline' },
    { title: 'menu.about', link: '/about', icon: 'information-outline' },
    { title: 'menu.contacts', link: '/contacts', icon: 'call-outline' },
    { title: 'menu.delivery', link: '/delivery', icon: 'car-outline' }
  ];

  constructor(
    private translate: TranslateService,
    private router: Router
  ) {
    this.translate.setDefaultLang('ua');
    this.translate.use('ua');
  }
}