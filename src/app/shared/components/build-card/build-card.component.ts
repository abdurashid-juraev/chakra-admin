import { Component, Input } from '@angular/core';
import { ReadMoreComponent } from '../read-more/read-more.component';

@Component({
  selector: 'app-build-card',
  imports: [ReadMoreComponent],
  templateUrl: './build-card.component.html',
  styleUrl: './build-card.component.css',
})
export class BuildCardComponent {
  @Input() buildTitle: string = '';
  @Input() buildSubTitle: string = '';
  @Input() buildDescription: string = '';
  @Input() imgPathBuild: string = '';
}
