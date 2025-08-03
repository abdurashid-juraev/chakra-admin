import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cube-svg',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 512 512"
      class="transition-colors duration-300"
      [class]="svgClass"
    >
      <path
        class="fill-current transition-colors duration-300"
        [class]="pathClass"
        d="M440.9 136.3a4 4 0 000-6.91L288.16 40.65a64.14 64.14 0 00-64.33 0L71.12 129.39a4 4 0 000 6.91L254 243.88a4 4 0 004.06 0zM54 163.51a4 4 0 00-6 3.49v173.89a48 48 0 0023.84 41.39L234 479.51a4 4 0 006-3.46V274.3a4 4 0 00-2-3.46zM272 275v201a4 4 0 006 3.46l162.15-97.23A48 48 0 00464 340.89V167a4 4 0 00-6-3.45l-184 108a4 4 0 00-2 3.45z"
      />
    </svg>
  `,
})
export class CubeSvgComponent {
  @Input() size: string | number = '24';
  @Input() pathClass: string = 'text-gray-500';
  @Input() svgClass: string = '';
}
