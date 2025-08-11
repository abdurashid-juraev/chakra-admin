import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopHeaderComponent } from '../top-header/top-header.component';
import { RouterModule } from '@angular/router';
import { Footer } from '../footer/footer/footer';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  imports: [SidebarComponent, TopHeaderComponent, RouterModule, Footer],
  styles: [
    `
      :host {
        display: block;
        background-color: rgb(248, 249, 250);
        overflow: auto;
        min-height: 100vh;
        height: 100%;
      }
      :host ::ng-deep .footer {
        padding: 32px 24px 20px;
      }
    `,
  ],
})
export default class DashboardLayoutComponent {}
