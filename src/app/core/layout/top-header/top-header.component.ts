import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { RouterLink, RouterModule, ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter, Subscription } from 'rxjs';
import { PersonSvgComponent } from '../../../shared/components/svg-icons/person-svg/person-svg';
import { SettingSvgComponent } from '../../../shared/components/svg-icons/setting-svg/setting-svg.component';
import { BellSvgComponent } from '../../../shared/components/svg-icons/bell-svg/bell-svg.component';
import { AppBreadcrumbComponent } from '../../component/breadcrumb/breadcrumb.component';
import { LayoutServiceService } from '../layout-service/layout-service.service';

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
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private routerEventsSubscription: Subscription | undefined;
  private readonly layoutServiceService = inject(LayoutServiceService);

  public pageTitle: string = '';

  public openSettings(): void {
    this.layoutServiceService.open();
  }
  ngOnInit(): void {
    this.setPageTitle(this.activatedRoute.root);

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
