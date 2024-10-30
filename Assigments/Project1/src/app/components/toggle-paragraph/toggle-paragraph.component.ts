import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'app-toggle-paragraph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-paragraph.component.html',
  styleUrl: './toggle-paragraph.component.css'
})
export class ToggleParagraphComponent {
  isButtonVisible = true;

  toggleButtonVisibility() {
    this.isButtonVisible = !this.isButtonVisible;
  }
}

