import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonToggle,
  IonIcon
} from '@ionic/angular/standalone';
import { ThemeService } from '../services/theme.service';
import { moon, sunny } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonToggle,
    IonIcon
  ]
})
export class SettingsPage {
  darkMode = false;

  constructor(private themeService: ThemeService) {
    addIcons({ moon, sunny });
    this.darkMode = this.themeService.darkMode;
  }

  async onThemeChange(event: any) {
    const isDarkMode = event.detail.checked;
    await this.themeService.setDarkMode(isDarkMode);
    this.darkMode = isDarkMode;
  }
}