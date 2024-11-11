import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
}

@Component({
  selector: 'app-employee-crud',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css'
})
export class EmployeeCRUDComponent {
  employees: Employee[] = [
    { id: 1, name: 'John Doe', position: 'Developer', department: 'IT' },
    { id: 2, name: 'Jane Smith', position: 'Designer', department: 'UI/UX' },
  ];

  selectedEmployee: Employee | null = null;
  newEmployee: Employee = { id: 0, name: '', position: '', department: '' };

  // Method to add a new employee
  addEmployee() {
    this.newEmployee.id = this.employees.length + 1;
    this.employees.push({ ...this.newEmployee });
    Swal.fire('Success', 'Employee added successfully!', 'success');
    this.newEmployee = { id: 0, name: '', position: '', department: '' }; // Reset form
  }

  // Method to view employee details
  viewEmployee(employee: Employee) {
    this.selectedEmployee = employee;
  }

  // Method to delete an employee
  deleteEmployee(employee: Employee) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this employee?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then(result => {
      if (result.isConfirmed) {
        this.employees = this.employees.filter(emp => emp.id !== employee.id);
        Swal.fire('Deleted!', 'Employee has been deleted.', 'success');
      }
    });
  }
}