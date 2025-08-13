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
interface OrderCard {
  title: string;
  subtitle: string;
  iconType: 'bell' | 'html' | 'korzinka' | 'billing' | 'jira' | 'adobe';
  iconClass?: string;
  iconWidth?: number;
  iconHeight?: number;
}
interface InfoCard {
  icon: string;
  title: string;
  info: string;
  value: number;
}
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
  orders: OrderCard[] = [
    {
      title: '$2400, Design changes',
      subtitle: '22 DEC 7:20 PM',
      iconType: 'bell',
      iconClass: 'text-primary',
      iconWidth: 19,
      iconHeight: 19,
    },
    {
      title: 'New order #4219423',
      subtitle: '21 DEC 11:21 PM',
      iconType: 'html',
    },
    {
      title: 'Server Payments for April',
      subtitle: '21 DEC 9:28 PM',
      iconType: 'korzinka',
    },
    {
      title: 'New card added for order #3210145',
      subtitle: '20 DEC 3:52 PM',
      iconType: 'billing',
      iconClass: 'text-amber-400',
      iconWidth: 19,
      iconHeight: 18,
    },
    {
      title: 'Unlock packages for Development',
      subtitle: '19 DEC 11:35 PM',
      iconType: 'jira',
    },
    {
      title: 'New order #9851258',
      subtitle: '18 DEC 4:41 PM',
      iconType: 'adobe',
    },
  ];

  getIconPath(iconType: string): string {
    const iconMap: Record<string, string> = {
      html: '/images/svg/html.svg',
      korzinka: '/images/svg/korzinka-blue.svg',
      jira: '/images/svg/jira-logo.svg',
      adobe: '/images/svg/adobexd-logo.svg',
    };
    return iconMap[iconType] || '';
  }
  infoCards: InfoCard[] = [
    {
      icon: '/images/svg/wallet.svg',
      title: 'Users',
      info: '32,984',
      value: 60,
    },
    {
      icon: '/images/svg/raketa.svg',
      title: 'Clicks',
      info: '2,42m',
      value: 85,
    },
    {
      icon: '/images/svg/korzinka.svg',
      title: 'Sales',
      info: '2,400$',
      value: 40,
    },
    {
      icon: '/images/svg/kluch.svg',
      title: 'Items',
      info: '320',
      value: 60,
    },
  ];
}
