import { Component } from '@angular/core';

@Component({
  selector: 'app-input-box',
  standalone: true,
  imports: [],
  templateUrl: './input-box.component.html',
  styleUrl: './input-box.component.css'
})
export class InputBoxComponent {
      
  inputType: string = 'password';
  toggleInputType() {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  }
}
