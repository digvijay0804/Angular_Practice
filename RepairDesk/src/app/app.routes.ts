import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard')
        .then(m => m.Dashboard)
  },
  {
    path: 'repairs',
    loadComponent: () =>
      import('./pages/repairs/repairs')
        .then(m => m.Repairs)
  },
  {
    path: 'customers',
    loadComponent: () =>
      import('./pages/customers/customers')
        .then(m => m.Customers)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found')
        .then(m => m.NotFound)
  }
];