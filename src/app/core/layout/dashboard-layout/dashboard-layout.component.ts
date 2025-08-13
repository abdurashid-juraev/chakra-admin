import { LayoutServiceService } from './../layout-service/layout-service.service';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopHeaderComponent } from '../top-header/top-header.component';
import { Footer } from '../footer/footer/footer';
import { DrawerModule } from 'primeng/drawer';
@Component({
  selector: 'app-dashboard-layout',
  imports: [SidebarComponent, TopHeaderComponent, Footer, RouterModule, DrawerModule],
  templateUrl: './dashboard-layout.component.html',
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
export default class DashboardLayoutComponent {
  public drawerVisible: boolean = false;

  constructor(private layoutServiceService: LayoutServiceService) {
    this.layoutServiceService.drawerVisible$.subscribe(drawer => (this.drawerVisible = drawer));
  }
}
