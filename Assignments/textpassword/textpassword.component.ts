import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-textpassword',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './textpassword.component.html',
  styleUrl: './textpassword.component.css'
})
export class TextpasswordComponent {
  inputValue: string = '';
  isPasswordVisible: boolean = false;

  // Method to toggle the input type
  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
