import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() price: number = 100;
  @Input() img: string = '';
}
