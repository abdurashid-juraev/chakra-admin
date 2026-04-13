import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({ selector: '[appBgColor]', standalone: true })
export class BgColorDirective {
  @HostBinding('class.bg-blue-300') isHover = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.isHover = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHover = false;
  }
}
