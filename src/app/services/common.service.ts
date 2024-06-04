import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  theme = localStorage.getItem('theme') || 'dark';
  lang = localStorage.getItem('lang') || 'en';

  themeSignal = signal<string>(this.theme);
  langSignal = signal<string>(this.lang);

  updateTheme() {
    this.themeSignal.update((value) => (value === 'dark' ? 'light' : 'dark'));
    localStorage.setItem('theme', this.themeSignal());
  }

  updateLang(lang: string) {
    this.langSignal.set(lang);
    localStorage.setItem('lang', lang);
  }
}
