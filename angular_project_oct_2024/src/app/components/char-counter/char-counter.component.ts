import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-char-counter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './char-counter.component.html',
  styleUrl: './char-counter.component.css'
})
export class CharCounterComponent {

  maxLength = 100;    // Maximum number of characters allowed
  text: string = '';  // Two-way binding to store the user's input
  remainingChars: number = this.maxLength;  // Start with max length

  updateCharCount() {
    // Update remaining characters as the user types
    this.remainingChars = this.maxLength - this.text.length;
  }
}
