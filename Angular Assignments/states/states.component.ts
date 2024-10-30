import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-states',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './states.component.html',
  styleUrl: './states.component.css'
})
export class StatesComponent {
  selectedState: string = ''; // Variable to hold the selected state
  states: string[] = ['California', 'Texas', 'New York', 'Florida']; // List of states

  onStateChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedState = target.value; // Update the selected state
  }

}

