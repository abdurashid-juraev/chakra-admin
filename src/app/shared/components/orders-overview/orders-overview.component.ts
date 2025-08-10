import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-orders-overview',
  templateUrl: './orders-overview.component.html',
  styleUrl: './orders-overview.component.css',
})
export class OrdersOverviewComponent {
  @Input() orderTitle: string = '';
  @Input() orderSubtitle: string = '';
}
