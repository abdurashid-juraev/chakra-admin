import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PersonSvgComponent } from '../../../shared/components/svg-icons/person-svg/person-svg';
import { SettingSvgComponent } from '../../../shared/components/svg-icons/setting-svg/setting-svg.component';
import { BellSvgComponent } from '../../../shared/components/svg-icons/bell-svg/bell-svg.component';

@Component({
  selector: 'app-top-header',
  imports: [
    BreadcrumbModule,
    RouterModule,
    PersonSvgComponent,
    SettingSvgComponent,
    BellSvgComponent,
  ],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.css',
})
export class TopHeaderComponent {
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [{ label: 'Pages' }, { label: 'Dashboard' }];

    this.home = { routerLink: '/' };
  }
}
