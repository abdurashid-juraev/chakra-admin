import { Component, Input } from '@angular/core';
import { ArrowRSvgComponent } from '../svg-icons/arrow-r-svg/arrow-r-svg.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-read-more',
  template: `
    <a
      [href]="href"
      class="group inline-flex items-center gap-1 overflow-hidden"
      [ngClass]="linkClass"
    >
      <span class="font-semibold transition-colors duration-200">
        {{ text }}
      </span>
      <span
        class="relative inline-block h-4 w-5 transition-transform duration-300 group-hover:translate-x-1"
      >
        <app-arrow-r-svg
          [size]="iconSize"
          color="currentColor"
          className="transition-colors duration-200"
        ></app-arrow-r-svg>
      </span>
    </a>
  `,
  imports: [ArrowRSvgComponent, NgClass],
})
export class ReadMoreComponent {
  @Input() text: string = 'Read more';
  @Input() href: string = '#!';
  @Input() iconSize: string | number = '16';
  @Input() linkClass: string = '';
}
