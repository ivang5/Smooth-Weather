import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  theme = localStorage.getItem('theme') || 'dark';

  themeSignal = signal<string>(this.theme);

  updateTheme() {
    this.themeSignal.update((value) => (value === 'dark' ? 'light' : 'dark'));
    localStorage.setItem('theme', this.themeSignal());
  }
}
