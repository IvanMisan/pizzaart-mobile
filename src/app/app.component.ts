import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [IonicModule, CommonModule, TranslateModule],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
}