import { Component } from '@angular/core'

@Component({
  selector: 'app-text-area',
  standalone: true,
  imports: [],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.css'
})
export class TextAreaComponent {
  maxLength: number = 100; // Maximum length of the text area
  text: string = ''; // Variable to hold user input
  remainingChars: number = this.maxLength; // Remaining characters

  onTextAreaInput(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    this.text = target.value;
    this.remainingChars = this.maxLength - this.text.length; // Update remaining characters
  }

}





