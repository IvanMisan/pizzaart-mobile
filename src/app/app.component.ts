import { Component } from '@angular/core';
import { 
  IonApp, 
  IonMenu, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonList, 
  IonItem, 
  IonIcon, 
  IonLabel, 
  IonRouterOutlet,
  IonToggle 
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { home, cart, list, settings, moon, sunny } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonApp, 
    IonMenu, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonList, 
    IonItem, 
    IonIcon, 
    IonLabel, 
    IonRouterOutlet,
    IonToggle, 
    RouterModule
  ]
})
export class AppComponent {
  appName = 'PizzaArt';
  isDarkMode = false; 

  constructor() {
    addIcons({ home, cart, list, settings, moon, sunny });
    
    this.checkSystemTheme();
  }

  checkSystemTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.isDarkMode = prefersDark.matches;
    this.toggleDarkTheme(this.isDarkMode);
  }

  toggleDarkTheme(shouldAdd: boolean) {
    this.isDarkMode = shouldAdd;
    document.body.classList.toggle('dark', shouldAdd);
    
    localStorage.setItem('darkTheme', shouldAdd.toString());
  }

  onThemeChange(event: any) {
    this.toggleDarkTheme(event.detail.checked);
  }
}