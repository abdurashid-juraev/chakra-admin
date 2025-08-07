import { Component } from '@angular/core';
import { SidebarComponent } from '../../core/layout/sidebar/sidebar.component';
import { TopHeaderComponent } from '../../core/layout/top-header/top-header.component';

@Component({
  selector: 'app-dashboard',
  imports: [SidebarComponent, TopHeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export default class DashboardComponent {}
