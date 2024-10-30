import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css'
})
export class PasswordComponent {
  inputType: string = 'password'; // Default type
  inputValue: string = ''; // Holds the input value

  toggleInputType(): void {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';

}}


