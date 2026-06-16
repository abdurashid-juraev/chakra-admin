import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.html',
  imports: [],
  styles: ``,
})
export class MyTableComponent {
  public columns = signal<string[] | []>([]);

  //crudCols
}
