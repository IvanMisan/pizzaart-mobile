import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('src/app/home/home.page').then(m => m.HomePage)
  },
  {
    path: 'order-history',
    loadComponent: () => import('src/app/pages/order-history/order-history.page').then(m => m.OrderHistoryPage)
  },
  {
    path: 'reviews',
    loadComponent: () => import('src/app/pages/reviews/reviews.page').then(m => m.ReviewsPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('src/app/pages/profile/profile.page').then(m => m.ProfilePage)
  },
  {
    path: 'about',
    loadComponent: () => import('src/app/pages/about/about.page').then(m => m.AboutPage)
  },
  {
    path: 'contacts',
    loadComponent: () => import('src/app/pages/contacts/contacts.page').then(m => m.ContactsPage)
  },
  {
    path: 'delivery',
    loadComponent: () => import('src/app/pages/delivery/delivery.page').then(m => m.DeliveryPage)
  }
];