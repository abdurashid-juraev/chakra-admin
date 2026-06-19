import { Directive, TemplateRef, input } from '@angular/core';

@Directive({ selector: '[templateDirective]' })
export class TemplateDirective<T> {
  public name = input<string>('', { alias: 'templateDirective' });
  constructor(public template: TemplateRef<any>) {}

  static ngTemplateContextGuard<T>(dir: TemplateDirective<T>, ctx: any): ctx is { $implicit: T } {
    return true;
  }
}
