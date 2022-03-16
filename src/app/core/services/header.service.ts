import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  isVisible!: boolean;

  constructor() {
    this.isVisible = false;
  }

  hideHeader(): void {
    this.isVisible = false;
  }

  showHeader(): void {
    this.isVisible = true;
  }
}
