import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [ FormsModule,CommonModule
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  num1: number = 0;
  num2: number = 0;
  operator: string = '+';
  result: number | string = '';

  // Method to calculate based on the selected operator
  calculate() {
    switch (this.operator) {
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
        this.result = this.num2 !== 0 ? this.num1 / this.num2 : 'Cannot divide by zero';
        break;
      default:
        this.result = 'Invalid operator';
    }
  }

}
