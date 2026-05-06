import { Component, input, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  public data = input<any[]>([]);
  public theadTemplate = input<TemplateRef<any> | null>(null);
  public rowTemplate = input<TemplateRef<any> | null>(null);
}
