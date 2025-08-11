import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterModule, ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter, Subscription } from 'rxjs';
import { PersonSvgComponent } from '../../../shared/components/svg-icons/person-svg/person-svg';
import { SettingSvgComponent } from '../../../shared/components/svg-icons/setting-svg/setting-svg.component';
import { BellSvgComponent } from '../../../shared/components/svg-icons/bell-svg/bell-svg.component';
import { AppBreadcrumbComponent } from '../../component/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-top-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PersonSvgComponent,
    SettingSvgComponent,
    BellSvgComponent,
    AppBreadcrumbComponent,
  ],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.css',
})
export class TopHeaderComponent implements OnInit, OnDestroy {
  pageTitle: string = '';
  private routerEventsSubscription: Subscription | undefined;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // 1. Komponent yuklanganda joriy sarlavhani o'rnatish
    this.setPageTitle(this.activatedRoute.root);

    // 2. Marshrut o'zgarishlarini kuzatib borish
    this.routerEventsSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setPageTitle(this.activatedRoute.root);
      });
  }

  ngOnDestroy(): void {
    if (this.routerEventsSubscription) {
      this.routerEventsSubscription.unsubscribe();
    }
  }

  private setPageTitle(route: ActivatedRoute): void {
    while (route.firstChild) {
      route = route.firstChild;
    }
    this.pageTitle = route.snapshot.data['title'] || '';
  }
}
