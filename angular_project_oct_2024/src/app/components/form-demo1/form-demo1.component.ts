import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-demo1',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-demo1.component.html',
  styleUrl: './form-demo1.component.css'
})
export class FormDemo1Component {
  user = {
    "firstName": "sach",
    "lastName": "Tendulkar",
    "email": "",
    "address": {
      "city": "",
      "state": "",
      "pin": ""
    }
  }
  submitMyForm(myForm: any) {
    console.log(myForm);
    console.log(myForm.value);
  }
}
