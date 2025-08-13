import { Routes } from '@angular/router';
import AuthPage from './core/layout/auth/auth-page/auth-page.component';
import { authGuard } from './core/auth/auth.guard';
import DashboardLayoutComponent from './core/layout/dashboard-layout/dashboard-layout.component';
import BillingComponent from './features/billing/billing.component';
import DashboardComponent from './features/dashboard/dashboard.component';
import ProfileComponent from './features/profile/profile.component';
import TablesComponent from './features/tables/tables.component';
import { EditTableComponent } from './features/tables/edit-table/edit-table.component';
import BillingEditComponent from './features/billing/billing-edit/billing-edit.component';

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
    component: DashboardLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { breadcrumb: 'Pages / Dashboard', title: 'Dashboard' },
      },
      {
        path: 'billing',
        component: BillingComponent,
        data: { breadcrumb: 'Pages / Billing', title: 'Billing' },
      },
      {
        path: 'billing/add', // Yangi qo'shish yo'li
        component: BillingEditComponent,
        data: { breadcrumb: 'Pages / Billing / Add', title: 'Add Billing' },
      },
      {
        path: 'billing/edit/:id',
        component: BillingEditComponent,
        data: { breadcrumb: 'Pages / Billing / Edit', title: 'Edit Billing' },
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: { breadcrumb: 'Pages / Profile', title: 'Profile' },
      },
      {
        path: 'tables',
        component: TablesComponent,
        data: { breadcrumb: 'Pages / Tables', title: 'Tables' },
      },
      {
        path: 'tables/edit/:id',
        component: EditTableComponent,
        data: { breadcrumb: 'Pages / Tables / Edit Author', title: 'Edit Author' },
      },
      {
        path: 'tables/add',
        component: EditTableComponent,
        data: { breadcrumb: 'Pages / Tables / Add Author', title: 'Add Author' },
      },
    ],
  },
  { path: '**', redirectTo: 'auth/sign-in' },
];
