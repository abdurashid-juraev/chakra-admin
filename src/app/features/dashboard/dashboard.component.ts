import { Component } from '@angular/core';

import { InfoCardComponent } from './components/info-card/info-card.component';

import { BgImageCardComponent } from './components/bg-image-card/bg-image-card.component';

import { ProgressBarModule } from 'primeng/progressbar';

import { ProjectsTableComponent } from './components/tables/projects-table/projects-table.component';
import { OrdersOverviewComponent } from './components/orders-overview/orders-overview.component';
import { BellSvgComponent } from '../../shared/components/svg-icons/bell-svg/bell-svg.component';
import { BillingSvgComponent } from '../../shared/components/svg-icons/billing-svg/billing-svg.component';
import { BuildCardComponent } from './components/build-card/build-card.component';
import { StatsChartCardComponent } from './components/charts/stats-chart-card/stats-chart-card.component';
import { InfoSmCardComponent } from './components/info-sm-card/info-sm-card.component';
import { SplineAreaChartComponent } from './components/charts/spline-area-chart/spline-area-chart.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    InfoCardComponent,
    BuildCardComponent,
    BgImageCardComponent,
    StatsChartCardComponent,
    ProgressBarModule,
    InfoSmCardComponent,
    SplineAreaChartComponent,
    ProjectsTableComponent,
    OrdersOverviewComponent,
    BellSvgComponent,
    BillingSvgComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export default class DashboardComponent {
  cards = [
    {
      infoTitle: 'Today’s Money',
      infoPrice: '$53,000',
      infoRange: '+55',
      imgPath: '/images/svg/wallet.svg',
    },
    {
      infoTitle: 'Today’s Users',
      infoPrice: '2,300',
      infoRange: '+5',
      imgPath: '/images/svg/globus.svg',
    },
    {
      infoTitle: 'New Clients',
      infoPrice: '+3,052',
      infoRange: '-14',
      imgPath: '/images/svg/doc.svg',
    },
    {
      infoTitle: 'Total Sales',
      infoPrice: '$173,000',
      infoRange: '+8',
      imgPath: '/images/svg/korzinka.svg',
    },
  ];
}
