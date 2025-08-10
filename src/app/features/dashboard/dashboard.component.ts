import { Component } from '@angular/core';
import { SidebarComponent } from '../../core/layout/sidebar/sidebar.component';
import { TopHeaderComponent } from '../../core/layout/top-header/top-header.component';
import { RouterOutlet } from '@angular/router';
import { InfoCardComponent } from '../../shared/components/info-card/info-card.component';
import { BuildCardComponent } from '../../shared/components/build-card/build-card.component';
import { BgImageCardComponent } from '../../shared/components/bg-image-card/bg-image-card.component';

import { ProgressBarModule } from 'primeng/progressbar';
import { StatsChartCardComponent } from '../../shared/components/charts/stats-chart-card/stats-chart-card.component';
import { InfoSmCardComponent } from '../../shared/components/info-sm-card/info-sm-card.component';
import { SplineAreaChartComponent } from '../../shared/components/charts/spline-area-chart/spline-area-chart.component';
import { ProjectsTableComponent } from '../../shared/components/tables/projects-table/projects-table.component';
import { Footer } from '../../core/layout/footer/footer/footer';
import { OrdersOverviewComponent } from '../../shared/components/orders-overview/orders-overview.component';
import { BellSvgComponent } from '../../shared/components/svg-icons/bell-svg/bell-svg.component';
import { BillingSvgComponent } from '../../shared/components/svg-icons/billing-svg/billing-svg.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    SidebarComponent,
    TopHeaderComponent,
    RouterOutlet,
    InfoCardComponent,
    BuildCardComponent,
    BgImageCardComponent,
    StatsChartCardComponent,
    ProgressBarModule,
    InfoSmCardComponent,
    SplineAreaChartComponent,
    ProjectsTableComponent,
    Footer,
    OrdersOverviewComponent,
    BellSvgComponent,
    BillingSvgComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export default class DashboardComponent {}
