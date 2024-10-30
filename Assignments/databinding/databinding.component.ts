import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  myName: string = 'Sachin';
  img_url: string = 'https://static.india.com/imageTopics/95ca27b84de3713cc9468be4ca872048.jpg?impolicy=Medium_Widthonly&w=340'
  flag: boolean = false;
  a: number = 10;
  b: number = 20;
  isButtonVisible = true;
  searchText: string = '';
  searchTextChanged() {
    console.log(this.searchText)
  }
  onSearchChange(newValue: string) {
    console.log(newValue)
  }

  toggleButtonVisibility() {
    this.isButtonVisible = !this.isButtonVisible;
  }
  
  remainingChars: number = 100; 

  updateRemainingCharacters(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    this.remainingChars = 100 - textarea.value.length;
  }

  states: string[] = ['California', 'Texas', 'New York', 'Florida', 'Illinois'];
  selectedState: string = '';

  // Method to update selected state
  onStateChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedState = selectElement.value;
  }

}
