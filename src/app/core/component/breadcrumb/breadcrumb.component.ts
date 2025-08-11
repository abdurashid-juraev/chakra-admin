// app-breadcrumb.component.ts

import { Component, OnInit } from '@angular/core';

import { BreadcrumbModule } from 'primeng/breadcrumb';

import { CommonModule } from '@angular/common';
import { BreadcrumbService } from '../breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [BreadcrumbModule, CommonModule],
  template: `
    <p-breadcrumb
      [model]="(breadcrumbService.breadcrumbs$ | async)!"
      class="text-medium-text cursor-pointer text-sm"
    >
      <ng-template #separator>
        <span class="separator text-gray-400">/</span>
      </ng-template>
    </p-breadcrumb>
  `,
  styles: [
    `
      :host ::ng-deep .p-breadcrumb-item {
        color: var(--color-light-text);
      }
      :host ::ng-deep .p-breadcrumb-item:last-child a {
        color: var(--color-dark-text);
        pointer-events: none;
      }
    `,
  ],
})
export class AppBreadcrumbComponent implements OnInit {
  constructor(public breadcrumbService: BreadcrumbService) {}
  ngOnInit(): void {}
}
