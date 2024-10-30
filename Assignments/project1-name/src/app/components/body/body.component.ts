import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
    title = 'project1-name';
  
    // Toggle Paragraph Visibility
    isParagraphVisible = true;
    
    // Text Area with Remaining Characters
    userInput = '';
    remainingCharacters = 100;
    
    // Dropdown for State Names
    states = ['California', 'Texas', 'New York', 'Florida', 'Illinois'];
    selectedState = '';
    
    // Arithmetic Operations
    num1: number = 0;
    num2: number = 0;
    operation: string = '+';
    result: number = 0;
    
    // Toggle Input Box Type (Text/Password)
    inputType: string = 'text';
    
    // Counter Example
    counter: number = 0;
  
    // Toggle Paragraph Visibility
    toggleParagraphVisibility() {
      this.isParagraphVisible = !this.isParagraphVisible;
    }
    
    // Update Remaining Characters in Text Area
    updateRemainingCharacters() {
      this.remainingCharacters = 100 - this.userInput.length;
    }
    
    // Handle State Change in Dropdown
    onStateChange() {
      console.log('Selected State:', this.selectedState);
    }
    
    // Perform Arithmetic Operation
    performOperation() {
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
          this.result = this.num2 !== 0 ? this.num1 / this.num2 : 0;
          break;
      }
    }
    
    // Toggle Input Box Type (Text/Password)
    toggleInputType() {
      this.inputType = this.inputType === 'text' ? 'password' : 'text';
    }
    
    // Counter Operations
    increment() {
      this.counter++;
    }
  
    decrement() {
      if (this.counter > 0) {
        this.counter--;
      }
    }
  
    reset() {
      this.counter = 0;
    }
  }


