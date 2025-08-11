import { Routes } from '@angular/router';
import AuthPage from './core/layout/auth/auth-page/auth-page.component';
import { authGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: AuthPage,
    children: [
      {
        path: 'sign-in',
        loadComponent: () => import('./core/layout/auth/sign-in/sign-in.component'),
      },
      {
        path: 'sign-up',
        loadComponent: () => import('./core/layout/auth/sign-up/sign-up.component'),
      },
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
    ],
  },
  {
    path: '',
    canActivate: [authGuard],
    canActivateChild: [authGuard],
    loadComponent: () => import('./core/layout/dashboard-layout/dashboard-layout.component'),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.component'),
      },
      {
        path: 'billing',
        loadComponent: () => import('./features/billing/billing.component'),
      },
      {
        path: 'profile',
        loadComponent: () => import('./features/profile/profile.component'),
      },
      {
        path: 'tables',
        loadComponent: () => import('./features/tables/tables.component'),
      },
    ],
  },
  { path: '**', redirectTo: 'auth/sign-in' },
];
