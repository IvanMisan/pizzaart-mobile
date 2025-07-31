import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { IonicModule } from '@ionic/angular';  
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-language-popover',
  templateUrl: './language-popover.component.html',
  styleUrls: ['./language-popover.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule], 
})
export class LanguagePopoverComponent {
  languages = [
   { code: 'en', label: 'English', flag: 'assets/flags/en.png' },
    { code: 'pl', label: 'Polski', flag: 'assets/flags/pl.png' },
    { code: 'ua', label: 'Українська', flag: 'assets/flags/ua.png' },
  ];

  constructor(private popoverCtrl: PopoverController) {}

  selectLang(langCode: string) {
    this.popoverCtrl.dismiss(langCode);
  }
}
