import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../app/core/layout/auth/auth-page/auth-page'),
    pathMatch: 'full',
  },
];
