import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
  },
  {
    path: 'order-history',
    loadChildren: () =>
      import('./pages/order-history/order-history.module').then(
        (m) => m.OrderHistoryModule
      ),
  },
  {
    path: 'order-details/:id',
    loadChildren: () =>
      import('./pages/order-details/order-details.module').then(
        (m) => m.OrderDetailsPageModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./pages/cart/cart.module').then((m) => m.CartPageModule),
  },
  {
    path: 'feedback/:orderId',
    loadChildren: () =>
      import('./feedback/feedback.module').then((m) => m.FeedbackPageModule),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
