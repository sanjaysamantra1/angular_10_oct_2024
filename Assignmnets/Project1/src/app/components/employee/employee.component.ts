import { Component } from '@angular/core';
import { OrdinalPipe } from '../../pipes/ordinal.pipe';
import { AgePipe } from '../../pipes/age.pipe';
import { SalutationPipe } from '../../pipes/salutation.pipe';
import { SearchPipe } from '../../pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Employee {
  name: string;
  dob: Date;
  gender: string;
  designation: string;
}

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    OrdinalPipe,
    AgePipe,
    SalutationPipe,
    SearchPipe,
    FormsModule,
    CommonModule
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  searchText: string = '';
  
  employees: Employee[] = [
    { name: 'John Doe', dob: new Date('1990-01-15'), gender: 'male', designation: 'Software Engineer' },
    { name: 'Jane Smith', dob: new Date('1985-07-30'), gender: 'female', designation: 'Product Manager' },
    { name: 'Emma Brown', dob: new Date('1995-03-12'), gender: 'female', designation: 'UX Designer' },
    { name: 'Michael Johnson', dob: new Date('1982-10-20'), gender: 'male', designation: 'CTO' }
  ];

}
