import { Component } from '@angular/core';

import { CommonModule } from '@angular/common'; // Import CommonModule

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-state-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './state-dropdown.component.html',
  styleUrl: './state-dropdown.component.css'
})
export class StateDropdownComponent {

  states: string[] = ['California', 'New York', 'Texas', 'Florida', 'Washington'];
  selectedState: string = '';

  onStateChange(event: any) {
    this.selectedState = event.target.value;
  }

}
