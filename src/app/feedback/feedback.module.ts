import { NgModule } from '@angular/core';
import { FeedbackPage } from './feedback.page';
import { FeedbackPageRoutingModule } from './feedback-routing.module';

@NgModule({
  imports: [
    FeedbackPage,
    FeedbackPageRoutingModule,
  ],
})
export class FeedbackPageModule {}
