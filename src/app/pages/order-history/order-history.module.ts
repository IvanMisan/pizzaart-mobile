import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { OrderHistoryPage } from './order-history.page'; // standalone
import { OrderHistoryPageRoutingModule } from './order-history-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderHistoryPage,               // standalone компонент — импортируем сюда
    OrderHistoryPageRoutingModule,
  ],
  // declarations: []  // НЕ указываем standalone компонент здесь!
})
export class OrderHistoryPageModule {}
