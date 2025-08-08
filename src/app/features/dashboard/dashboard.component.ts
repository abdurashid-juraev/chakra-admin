import { Component } from '@angular/core';
import { SidebarComponent } from '../../core/layout/sidebar/sidebar.component';
import { TopHeaderComponent } from '../../core/layout/top-header/top-header.component';
import { RouterOutlet } from '@angular/router';
import { InfoCardComponent } from '../../shared/components/info-card/info-card.component';

@Component({
  selector: 'app-dashboard',
  imports: [SidebarComponent, TopHeaderComponent, RouterOutlet, InfoCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export default class DashboardComponent {}
