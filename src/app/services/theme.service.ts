import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkModeSubject.asObservable();

  constructor(private storage: Storage) {
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
    this.setDarkMode(!this.darkMode);
    await this.storage.set('darkMode', this.darkMode);
  }

  private setDarkMode(enabled: boolean) {
    this.darkModeSubject.next(enabled);
    document.body.classList.toggle('dark', enabled);
  }
}
