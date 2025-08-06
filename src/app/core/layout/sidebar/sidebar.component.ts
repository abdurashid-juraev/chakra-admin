import { Component } from '@angular/core';
import { LogoComponent } from '../../../shared/components/logo/logo.component';
import { HomeSvgComponent } from '../../../shared/components/svg-icons/home-svg/home-svg.component';
import { TablesSvgComponent } from '../../../shared/components/svg-icons/tables-svg/tables-svg.component';
import { BillingSvgComponent } from '../../../shared/components/svg-icons/billing-svg/billing-svg.component';
import { RtlSvgComponent } from '../../../shared/components/svg-icons/rtl-svg/rtl-svg.component';
import { DocSvgComponent } from '../../../shared/components/svg-icons/doc-svg/doc-svg.component';
import { PersonSvgComponent } from '../../../shared/components/svg-icons/person-svg/person-svg';
import { RaketaSvgComponent } from '../../../shared/components/svg-icons/raketa-svg/raketa-svg.component';
@Component({
  selector: 'app-sidebar',
  imports: [
    LogoComponent,
    HomeSvgComponent,
    TablesSvgComponent,
    BillingSvgComponent,
    RtlSvgComponent,
    DocSvgComponent,
    PersonSvgComponent,
    RaketaSvgComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {}
