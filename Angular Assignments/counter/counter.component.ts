import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count: number = 0; // Initialize count

  increment(): void {
    this.count++; // Increment count
  }

  decrement(): void {
    this.count--; // Decrement count
  }

  reset(): void {
    this.count = 0; // Reset count to zero
  }

}

