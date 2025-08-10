import { Component, Input } from '@angular/core';
import { ProgressBar } from 'primeng/progressbar';

@Component({
  selector: 'app-info-sm-card',
  imports: [ProgressBar],
  templateUrl: './info-sm-card.component.html',
  styleUrl: './info-sm-card.component.css',
})
export class InfoSmCardComponent {
  @Input() smCardIcon: string = '';
  @Input() smCardTitle: string = '';
  @Input() smCardInfo: string = '';
  @Input() value: string | number = '';
}
