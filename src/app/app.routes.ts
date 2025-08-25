import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
  },
  {
    path: 'order-history',
    loadComponent: () => import('./pages/order-history/order-history.page').then(m => m.OrderHistoryPage),
  },
  {
    path: 'cart',
    loadComponent: () => import('./pages/cart/cart.page').then(m => m.CartPage),
  },
  {
    path: 'feedback/:orderId',
    loadComponent: () => import('./feedback/feedback.page').then(m => m.FeedbackPage),
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings.page').then(m => m.SettingsPage),
  },
];