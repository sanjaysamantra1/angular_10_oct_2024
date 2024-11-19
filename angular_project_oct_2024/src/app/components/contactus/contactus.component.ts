import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  user: any = { name: '', age: '' };
  hasChanges: boolean = true;

  constructor() {
  }

  submitMyForm(formData: any) {
    console.log(formData);
    this.hasChanges = false;
  }
}
