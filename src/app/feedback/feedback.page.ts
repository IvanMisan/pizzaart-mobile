import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
  standalone: true,  // важно
  imports: [IonicModule, CommonModule, FormsModule],  // обязательный импорт модулей для шаблона
})
export class FeedbackPage {
  feedbackText: string = '';
  photo: string | null | undefined = null;

  constructor() {}

  async takePhoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });

      this.photo = image.dataUrl ?? null;
    } catch (error) {
      console.error('Ошибка камеры:', error);
    }
  }

  submitFeedback() {
    console.log('Отзыв:', this.feedbackText);
    console.log('Фото:', this.photo);

    alert('Спасибо за ваш отзыв!');

    this.feedbackText = '';
    this.photo = null;
  }
}
