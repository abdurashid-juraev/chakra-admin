import { Component, Input } from '@angular/core';
import { ReadMoreComponent } from '../../../../shared/components/read-more/read-more.component';

@Component({
  selector: 'app-bg-image-card',
  imports: [ReadMoreComponent],
  templateUrl: './bg-image-card.component.html',
  styleUrl: './bg-image-card.component.css',
})
export class BgImageCardComponent {
  public imageUrl = '/image/png/people-image.png';
  @Input() imgCardTitle: string = '';
  @Input() imgCardDescription: string = '';
}
