import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  myName: string = 'Sachin';
  img_url: string = 'https://static.india.com/imageTopics/95ca27b84de3713cc9468be4ca872048.jpg?impolicy=Medium_Widthonly&w=340'
  flag: boolean = false;
  a: number = 10;
  b: number = 20;

  searchText: string = '';
  searchTextChanged() {
    console.log(this.searchText)
  }
  onSearchChange(newValue: string) {
    console.log(newValue)
  }

  f1() {
    alert('I am f1...')
  }
}
