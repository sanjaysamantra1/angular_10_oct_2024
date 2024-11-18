import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-arithematicoperations',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './arithematicoperations.component.html',
  styleUrl: './arithematicoperations.component.css',
})
export class ArithematicoperationsComponent {
  number1: number | null = null;
  number2: number | null = null;
  result: number | string | null = null;
  onPerformOperation(operation: string) {
    if (this.number1 === null || this.number2 === null) {
      this.result = 'Must Enter Both the Numbers';
      return;
    }
    switch (operation) {
      case '+':
        this.result = this.number1 + this.number2;
        break;
      case '-':
        this.result = this.number1 - this.number2;
        break;
      case '*':
        this.result = this.number1 * this.number2;
        break;
      case '/':
        if (this.number2 === 0) {
          this.result = "Can't divided by Zero";
        } else {
          this.result = this.number1 / this.number2;
        }
    }
  }
}
