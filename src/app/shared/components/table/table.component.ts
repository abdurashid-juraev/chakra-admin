import { Component, input, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent<T> {
  public data = input<T[]>([]);
  public theadTemplate = input<TemplateRef<{ $implicit: T; index: number }> | null>(null);
  public rowTemplate = input<TemplateRef<{ $implicit: T; index: number }> | null>(null);
}
