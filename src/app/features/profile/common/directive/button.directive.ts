import { Directive, ElementRef, HostListener, inject, input, Renderer2 } from '@angular/core';

@Directive({
  selector: 'appBghover]',
  standalone: true,
})
export class BgHoverDirective {
  bgColor = input<string>('red');

  private elementRef: ElementRef = inject(ElementRef);
  private renderer2: Renderer2 = inject(Renderer2);

  //@HostListener('mouseenter', onMouseEnter(){

  //})
}
