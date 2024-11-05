import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-crud',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css'
})
export class EmployeeCrudComponent {
  employees = [
    { id: 1, name: 'John Doe', position: 'Developer', department: 'IT' },
    { id: 2, name: 'Jane Smith', position: 'Manager', department: 'HR' },
    { id: 3, name: 'Bob Johnson', position: 'Designer', department: 'Design' },
    { id: 4, name: 'Alice Brown', position: 'Analyst', department: 'Finance' },
    { id: 5, name: 'David Lee', position: 'Developer', department: 'IT' },
    { id: 6, name: 'Emily Wilson', position: 'Manager', department: 'HR' }
  ];

  newEmployee = { id: 0, name: '', position: '', department: '' };

  addEmployee() {
    this.newEmployee.id = this.employees.length + 1;
    this.employees.push({ ...this.newEmployee });
    Swal.fire('Added Successfully!', 'The new employee was added.', 'success');
    this.newEmployee = { id: 0, name: '', position: '', department: '' };
  }

  deleteEmployee(index: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.employees.splice(index, 1);
        Swal.fire('Deleted!', 'The employee has been deleted.', 'success');
      }
    });
  }

  selectedEmployee: any = null;

  viewEmployeeDetails(employee: any) {
    this.selectedEmployee = employee;
  }
}
