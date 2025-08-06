import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-doc-svg',
  standalone: true,
  template: `
    <svg
      [attr.width]="width"
      [attr.height]="height"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      [class]="className"
    >
      <g clip-path="url(#clip1503_400)">
        <path
          d="M12.53 6.56L8.43 6.56C8.06 6.56 7.7 6.41 7.44 6.15C7.17 5.88 7.03 5.52 7.03 5.15L7.03 1.05C7.03 1.02 7.01 0.99 6.99 0.97C6.97 0.94 6.94 0.93 6.91 0.93L4.21 0.93C3.72 0.93 3.24 1.13 2.89 1.48C2.54 1.83 2.34 2.31 2.34 2.81L2.34 12.18C2.34 12.68 2.54 13.16 2.89 13.51C3.24 13.86 3.72 14.06 4.21 14.06L10.78 14.06C11.27 14.06 11.75 13.86 12.1 13.51C12.45 13.16 12.65 12.68 12.65 12.18L12.65 6.67C12.65 6.64 12.64 6.61 12.62 6.59C12.6 6.57 12.57 6.56 12.53 6.56Z"
          [attr.fill]="color"
          class="transition-colors duration-150"
        />
        <path
          d="M12.28 5.52L8.06 1.31C8.06 1.3 8.04 1.29 8.03 1.29C8.02 1.29 8.01 1.29 8 1.3C7.99 1.3 7.98 1.31 7.97 1.32C7.97 1.33 7.96 1.34 7.96 1.35L7.96 5.15C7.96 5.28 8.01 5.4 8.1 5.48C8.19 5.57 8.31 5.62 8.43 5.62L12.24 5.62C12.25 5.62 12.26 5.62 12.27 5.61C12.28 5.6 12.29 5.6 12.29 5.58C12.29 5.57 12.29 5.56 12.29 5.55C12.29 5.54 12.29 5.53 12.28 5.52Z"
          [attr.fill]="color"
          class="transition-colors duration-150"
        />
      </g>
      <defs>
        <clipPath id="clip1503_400">
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
export class DocSvgComponent {
  @Input() width: string | number = '15';
  @Input() height: string | number = '15';
  @Input() color: string = 'text-primary';
  @Input() className: string = '';
}
