import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  num1: number | null = null; // First number input
  num2: number | null = null; // Second number input
  operation: string = '+'; // Selected operation
  result: number | null = null; // Result of the operation

  operations: string[] = ['+', '-', '*', '/']; // List of operations

  calculate(): void {
    if (this.num1 !== null && this.num2 !== null) {
      switch (this.operation) {
        case '+':
          this.result = this.num1 + this.num2;
          break;
        case '-':
          this.result = this.num1 - this.num2;
          break;
        case '*':
          this.result = this.num1 * this.num2;
          break;
        case '/':
          this.result = this.num2 !== 0 ? this.num1 / this.num2 : null; // Handle division by zero
          break;
      }
    }
  }
}
