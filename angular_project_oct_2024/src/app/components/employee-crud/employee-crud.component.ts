import { Component } from '@angular/core';
<<<<<<< HEAD
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
}
=======
import { EmployeeService } from '../../services/employee.service';
import { IEmployee } from '../../models/iemployee';
import { Employee } from '../../models/employee';
>>>>>>> e869076cb2add4379d4b28d9d144d2ff771d8377

@Component({
  selector: 'app-employee-crud',
  standalone: true,
<<<<<<< HEAD
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
=======
  imports: [],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css'
})
export class EmployeeCrudComponent {
  isLoading: boolean = false;
  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService) {
  }
  ngOnInit() {
    this.isLoading = true;
    this.employeeService.getAllEmployees().subscribe((response: Employee[]) => {
      this.employees = response;
      this.isLoading = false;
      console.log(this.employees)
    })
  }
}
>>>>>>> e869076cb2add4379d4b28d9d144d2ff771d8377
