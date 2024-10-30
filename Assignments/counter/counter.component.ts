import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter: number = 0; // Initial counter value

  // Method to increment the counter
  increment(): void {
    this.counter++;
  }

  // Method to decrement the counter
  decrement(): void {
    if (this.counter > 0) { // Prevents counter from going below 0
      this.counter--;
    }
  }

  // Method to reset the counter to 0
  reset(): void {
    this.counter = 0;
  }
}
