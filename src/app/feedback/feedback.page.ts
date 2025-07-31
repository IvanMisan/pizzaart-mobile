import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class FeedbackPage {
  feedbackText: string = '';
  photo: string | null | undefined = null;
  rating: number = 0;
  stars = Array(5).fill(0);

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

  setRating(value: number) {
    this.rating = value;
  }

  submitFeedback() {
    console.log('Отзыв:', this.feedbackText);
    console.log('Оценка:', this.rating);
    console.log('Фото:', this.photo);

    alert('Спасибо за ваш отзыв!');

    this.feedbackText = '';
    this.photo = null;
    this.rating = 0;
  }
}