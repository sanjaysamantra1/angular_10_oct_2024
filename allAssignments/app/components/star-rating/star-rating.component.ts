import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css',
})
export class StarRatingComponent {
  list = [0, 0, 0, 0, 0];

  onButtonClick(index: number) {
    this.list = this.list.map((val, i) => {
      if (i <= index) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
