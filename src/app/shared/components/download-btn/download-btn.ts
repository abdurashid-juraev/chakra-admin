import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-download-btn',
  template: `
    <a
      href="#!"
      download
      class="group grid h-9 w-37.5 place-items-center rounded-[34.50px] px-2 text-sm font-bold capitalize transition-all duration-150 active:scale-95"
      [class]="bgClasses"
    >
      <span
        class="[class]='color' group-hover:text-primary text-white transition-colors duration-150"
      >
        {{ label }}
      </span>
    </a>
  `,
})
export class DownloadBtn {
  @Input() label: string = 'Free Download';
  @Input() bgStyle: string = 'bg-gradient-to-l';
  @Input() fromColor: string = 'from-slate-700';
  @Input() toColor: string = 'to-gray-900';

  @Input() color: string = 'group-hover:text-primary';
  get bgClasses(): string {
    return `${this.bgStyle} ${this.fromColor} ${this.toColor}`;
  }
}
