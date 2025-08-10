import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-r-svg',
  standalone: true,
  template: `<svg
    [attr.width]="size"
    [attr.height]="size"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    [class]="className"
  >
    <path
      d="M6.28101 2.625L9.656 6L6.28101 9.375"
      [attr.stroke]="color"
      stroke-width="1.125"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="transition-all duration-300"
    />
    <path
      d="M9.18725 6.00024H2.34351"
      [attr.stroke]="color"
      stroke-width="1.125"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="transition-all duration-300"
    />
  </svg>`,
  styles: [
    `
      :host {
        display: inline-block;
      }
    `,
  ],
})
export class ArrowRSvgComponent {
  @Input() size: string | number = '12';
  @Input() color: string = '#2D3748';
  @Input() className: string = '';
}
