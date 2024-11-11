import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrdinalPipe } from '../../ordinal.pipe';
import { AgePipe } from '../../age.pipe';
import { SalutationPipe } from '../../salutation.pipe';
import { SearchpipePipe } from '../../searchpipe.pipe';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    FormsModule,
    OrdinalPipe,
    AgePipe,
    SalutationPipe,
    SearchpipePipe


  ]
})
export class EmployeeComponent {
  searchTerm: string = '';
  employees = [
    { id: 1, name: 'John Doe', birthDate: new Date(1990, 6, 15), gender: 'Male', position: 'Developer' },
    { id: 2, name: 'Jane Smith', birthDate: new Date(1985, 3, 22), gender: 'Female', position: 'Designer' },
    // Add more employee objects here
  ];
}
