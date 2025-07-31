import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { OrderHistoryPage } from './order-history.page';
import { OrderHistoryPageRoutingModule } from './order-history-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderHistoryPage,              
    OrderHistoryPageRoutingModule,
  ],
})
export class OrderHistoryPageModule {}
