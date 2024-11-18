import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.css',
})
export class TextareaComponent {
  maximumLength: number = 100;
  inputString: string = '';

  onCharacterPress() {
    this.maximumLength = 100 - this.inputString?.length;
  }
}
