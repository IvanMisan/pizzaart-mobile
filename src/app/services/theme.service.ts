import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkModeSubject.asObservable();

  constructor(
    private storage: Storage,
  ) {
    this.init();
  }

  async init() {
    await this.storage.create();
    const savedMode = await this.storage.get('darkMode');
    this.setDarkMode(!!savedMode);
  }

  get darkMode(): boolean {
    return this.darkModeSubject.value;
  }

  async toggleDarkMode() {
    const newMode = !this.darkMode;
    await this.setDarkMode(newMode);
  }
  async setDarkMode(enabled: boolean) {
    this.darkModeSubject.next(enabled);
    document.body.classList.toggle('dark', enabled);
    await this.storage.set('darkMode', enabled);
  }

  getCurrentTheme(): string {
    return this.darkMode ? 'dark' : 'light';
  }
}