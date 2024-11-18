import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  num = 0;
  onDecrement() {
    this.num -= 1;
  }
  onReset() {
    this.num = 0;
  }
  onIncrement() {
    this.num += 1;
  }
}
