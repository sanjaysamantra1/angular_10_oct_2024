import { Component } from '@angular/core';

@Component({
  selector: 'app-text-area',
  standalone: true,
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent {
  maxLength: number = 100;
  text: string = '';

  // Calculate remaining characters based on input length
  get remainingChars(): number {
    return this.maxLength - this.text.length;
  }

  // Event handler for input event to update text value
  onTextAreaInput(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    this.text = target.value;
  }
}
