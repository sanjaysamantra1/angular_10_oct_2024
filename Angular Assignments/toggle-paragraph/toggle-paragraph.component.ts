import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toggle-paragraph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-paragraph.component.html',
  styleUrl: './toggle-paragraph.component.css'
})
export class ToggleParagraphComponent {

  isVisible = false; // Track visibility

  toggleVisibility() {
    this.isVisible = !this.isVisible; // Toggle visibility
  }

}


