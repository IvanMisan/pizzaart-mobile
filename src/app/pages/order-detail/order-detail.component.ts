import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class OrderDetailComponent implements OnInit {
  @Input() order: Order | null = null;
  @Output() back = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  goBack() {
    this.back.emit();
  }
}
