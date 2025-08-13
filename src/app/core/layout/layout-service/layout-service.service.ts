import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class LayoutServiceService {
  private drawerVisibleSource = new BehaviorSubject<boolean>(false);
  drawerVisible$ = this.drawerVisibleSource.asObservable();

  open() {
    this.drawerVisibleSource.next(true);
  }

  close() {
    this.drawerVisibleSource.next(false);
  }
}
