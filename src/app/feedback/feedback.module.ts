import { NgModule } from '@angular/core';
import { FeedbackPage } from './feedback.page'; // standalone
import { FeedbackPageRoutingModule } from './feedback-routing.module';

@NgModule({
  imports: [
    FeedbackPage, // standalone импорт
    FeedbackPageRoutingModule,
  ],
})
export class FeedbackPageModule {}
