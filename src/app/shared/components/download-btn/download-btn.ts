import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-download-btn',

  template: ``,
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
