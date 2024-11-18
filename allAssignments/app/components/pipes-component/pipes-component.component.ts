import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AgePipe } from '../../pipes/age.pipe';
import { FormsModule } from '@angular/forms';
import { SalutationPipe } from '../../pipes/salutation.pipe';
import { SearchemployeePipe } from '../../pipes/searchemployee.pipe';
import { OrdinalpipePipe } from '../../pipes/ordinalpipe.pipe';

@Component({
  selector: 'app-pipes-component',
  standalone: true,
  imports: [
    CommonModule,
    AgePipe,
    FormsModule,
    SalutationPipe,
    SearchemployeePipe,
    OrdinalpipePipe,
  ],
  templateUrl: './pipes-component.component.html',
  styleUrl: './pipes-component.component.css',
})
export class PipesComponentComponent {
  DOB = '';
  search = '';
  ordinal = '';

  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' },
  ];
}
