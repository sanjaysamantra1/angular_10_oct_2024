import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-toggle-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './toggle-input.component.html',
  styleUrl: './toggle-input.component.css'
})
export class ToggleInputComponent {
  inputValue: string = '';
  isPassword: boolean = true;

  togglePasswordVisibility() {
    this.isPassword = !this.isPassword;
  }
}
