import { Component } from '@angular/core';
import { LogoComponent } from '../../../shared/components/logo/logo.component';
import { HomeSvgComponent } from '../../../shared/components/svg-icons/home-svg/home-svg.component';
import { TablesSvgComponent } from '../../../shared/components/svg-icons/tables-svg/tables-svg.component';
import { BillingSvgComponent } from '../../../shared/components/svg-icons/billing-svg/billing-svg.component';
import { RtlSvgComponent } from '../../../shared/components/svg-icons/rtl-svg/rtl-svg.component';

@Component({
  selector: 'app-sidebar',
  imports: [
    LogoComponent,
    HomeSvgComponent,
    TablesSvgComponent,
    BillingSvgComponent,
    RtlSvgComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {}
