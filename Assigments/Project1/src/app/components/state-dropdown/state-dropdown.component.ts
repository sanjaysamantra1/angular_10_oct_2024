import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-state-dropdown',
  standalone: true,
  imports: [
    CommonModule
   ],
  templateUrl: './state-dropdown.component.html',
  styleUrl: './state-dropdown.component.css'
})
export class StateDropdownComponent {
  states: string[] = [
    'California', 'Texas', 'New York', 'Florida', 'Illinois', 'Pennsylvania', 
    'Ohio', 'Georgia', 'North Carolina', 'Michigan'
  ];

  // Variable to store selected state
  selectedState: string = '';

  // Method to handle dropdown change
  onStateChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedState = selectElement.value;
  }

}
