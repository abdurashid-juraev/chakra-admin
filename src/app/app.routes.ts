import { Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import AuthPage from './core/layout/auth/auth-page/auth-page.component';

export const routes: Routes = [
  // Auth layout ichida sign-in va sign-up
  {
    path: 'auth',
    component: AuthPage,
    children: [
      {
        path: 'sign-in',
        loadComponent: () =>
          import('./core/layout/auth/sign-in/sign-in.component').then(m => m.default),
      },
      {
        path: 'sign-up',
        loadComponent: () =>
          import('./core/layout/auth/sign-up/sign-up.component').then(m => m.default),
      },
      {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full',
      },
    ],
  },

  // AuthGuard bilan himoyalangan sahifalar
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then(m => m.default),
      },
      {
        path: 'billing',
        loadComponent: () => import('./features/billing/billing.component').then(m => m.default),
      },
      {
        path: 'profile',
        loadComponent: () => import('./features/profile/profile.component').then(m => m.default),
      },
      {
        path: 'tables',
        loadComponent: () => import('./features/tables/tables.component').then(m => m.default),
      },
    ],
  },

  // Root path – foydalanuvchiga qarab yo'naltirish
  {
    path: '',
    redirectTo: 'auth/sign-in',
    pathMatch: 'full',
  },

  // Not found -> 404
  {
    path: '**',
    redirectTo: 'auth/sign-in',
  },
];
