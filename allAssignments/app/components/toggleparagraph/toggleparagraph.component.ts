import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-toggleparagraph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggleparagraph.component.html',
  styleUrl: './toggleparagraph.component.css',
})
export class ToggleparagraphComponent {
  isEnabled: boolean = true;
  onChangeToggle() {
    this.isEnabled = !this.isEnabled;
  }
}
