import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { OrderDetailsPage } from './order-details.page';
import { OrderDetailsPageRoutingModule } from './order-details-routing.module';
import { OrderDetailComponent } from 'app/pages/order-detail/order-detail.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    OrderDetailsPageRoutingModule,
    OrderDetailsPage,       
    OrderDetailComponent    
  ],
})
export class OrderDetailsPageModule {}
