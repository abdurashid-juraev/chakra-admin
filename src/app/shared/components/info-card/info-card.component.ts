import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  imports: [],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css',
})
export class InfoCardComponent {
  @Input() imgPath: string = '';
  @Input() infoTitle: string = '';
  @Input() infoPrice: string = '';
  @Input() infoRange: string = '';
}
