import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-arthimetic',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './arthimetic.component.html',
  styleUrl: './arthimetic.component.css'
})
export class ArthimeticComponent {
  num1: number = 0;
  num2: number = 0;
  selectedOperation: string = 'add';
  result: number | string = 0;

  // Method to perform the selected arithmetic operation
  performOperation(): void {
    switch (this.selectedOperation) {
      case 'add':
        this.result = this.num1 + this.num2;
        break;
      case 'subtract':
        this.result = this.num1 - this.num2;
        break;
      case 'multiply':
        this.result = this.num1 * this.num2;
        break;
      case 'divide':
        if (this.num2 !== 0) {
          this.result = this.num1 / this.num2;
        } else {
          this.result = 'Error: Division by zero';
        }
        break;
      default:
        this.result = 'Invalid operation';
    }
  }
}
