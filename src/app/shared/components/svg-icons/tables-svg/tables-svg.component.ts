import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tables-svg',
  template: `
    <svg
      [attr.width]="width"
      [attr.height]="height"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      [class]="className"
    >
      <g clip-path="url(#clip2_94)">
        <path
          d="M3.04 14.53L2.1 14.53C1.92 14.53 1.74 14.45 1.61 14.32C1.48 14.19 1.4 14.01 1.4 13.82L1.4 9.6C1.4 9.42 1.48 9.24 1.61 9.11C1.74 8.98 1.92 8.9 2.1 8.9L3.04 8.9C3.23 8.9 3.41 8.98 3.54 9.11C3.67 9.24 3.75 9.42 3.75 9.6L3.75 13.82C3.75 14.01 3.67 14.19 3.54 14.32C3.41 14.45 3.23 14.53 3.04 14.53Z"
          [attr.fill]="barColor"
          class="transition-colors duration-150"
        />
        <path
          d="M9.6 14.53L8.67 14.53C8.48 14.53 8.3 14.45 8.17 14.32C8.04 14.19 7.96 14.01 7.96 13.82L7.96 6.79C7.96 6.6 8.04 6.43 8.17 6.29C8.3 6.16 8.48 6.09 8.67 6.09L9.6 6.09C9.79 6.09 9.97 6.16 10.1 6.29C10.23 6.43 10.31 6.6 10.31 6.79L10.31 13.82C10.31 14.01 10.23 14.19 10.1 14.32C9.97 14.45 9.79 14.53 9.6 14.53Z"
          [attr.fill]="barColor"
          class="transition-colors duration-150"
        />
        <path
          d="M12.89 14.53L11.95 14.53C11.76 14.53 11.58 14.45 11.45 14.32C11.32 14.19 11.25 14.01 11.25 13.82L11.25 3.51C11.25 3.32 11.32 3.15 11.45 3.01C11.58 2.88 11.76 2.81 11.95 2.81L12.89 2.81C13.07 2.81 13.25 2.88 13.38 3.01C13.51 3.15 13.59 3.32 13.59 3.51L13.59 13.82C13.59 14.01 13.51 14.19 13.38 14.32C13.25 14.45 13.07 14.53 12.89 14.53Z"
          [attr.fill]="barColor"
          class="transition-colors duration-150"
        />
        <path
          d="M6.32 14.53L5.39 14.53C5.2 14.53 5.02 14.45 4.89 14.32C4.76 14.19 4.68 14.01 4.68 13.82L4.68 1.17C4.68 0.98 4.76 0.8 4.89 0.67C5.02 0.54 5.2 0.46 5.39 0.46L6.32 0.46C6.51 0.46 6.69 0.54 6.82 0.67C6.95 0.8 7.03 0.98 7.03 1.17L7.03 13.82C7.03 14.01 6.95 14.19 6.82 14.32C6.69 14.45 6.51 14.53 6.32 14.53Z"
          [attr.fill]="barColor"
          class="transition-colors duration-150"
        />
      </g>
      <defs>
        <clipPath id="clip2_94">
          <rect
            width="14.976562"
            height="14.976562"
            transform="translate(0.011719 0.011719)"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        justify-content: center;
        align-items: center;
      }
    `,
  ],
})
export class TablesSvgComponent {
  @Input() width: string | number = '15';
  @Input() height: string | number = '15';
  @Input() barColor: string = '#4FD1C5';
  @Input() className: string = '';
}
