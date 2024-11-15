import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-demo2',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-demo2.component.html',
  styleUrl: './form-demo2.component.css'
})
export class FormDemo2Component {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // this.withFormGroup();
    this.withFormBuilder();
  }
  withFormGroup() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('Sachin', [Validators.required, Validators.minLength(5)]),
      lastName: new FormControl(),
      email: new FormControl(),
      address: new FormGroup({
        city: new FormControl(),
        state: new FormControl(),
        pin: new FormControl(),
      })
    }, { updateOn: 'blur' })
  }

  withFormBuilder() {
    this.registerForm = this.formBuilder.group({
      firstName: ['sachin'],
      lastName: [],
      email: [],
      address: this.formBuilder.group({
        city: [],
        state: [],
        pin: [],
      })
    })
  }

  submitMyForm(registerForm: FormGroup) {
    console.log(registerForm)
  }
}
