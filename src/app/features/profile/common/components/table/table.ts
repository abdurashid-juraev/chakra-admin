import { TemplateDirective } from './../../directives/template-directive';
import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
  signal,
  TemplateRef,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

export interface IColumns {
  id: number;
  f: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.html',
  imports: [NgTemplateOutlet],
})
export class MyTableComponent implements AfterContentInit {
  public value = signal<string[] | []>([]);

  @ContentChildren(TemplateDirective) templates!: QueryList<TemplateDirective>;

  theadTemplate!: TemplateRef<any>;
  tbodyTemplate!: TemplateRef<any>;

  ngAfterContentInit() {
    this.templates.forEach(item => {
      if (item.name() === 'thead') {
        this.theadTemplate = item.template;
      } else if (item.name() === 'tbody') {
        this.tbodyTemplate = item.template;
      }
    });
  }
}
