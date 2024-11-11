import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  Age:string;
}

@Component({
  selector: 'app-employee-crud',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCRUDComponent {
  employees: Employee[] = [
    { id: 1, name: 'John Doe', position: 'Developer', department: 'IT' , Age: '35'},
    { id: 2, name: 'Jane Smith', position: 'Manager', department: 'HR',Age: '35' },
  ];

  newEmployee: Employee = { id: 0, name: '', position: '', department: '',Age: ''};
  selectedEmployee: Employee | null = null;

  deleteEmployee(employee: Employee) {
    Swal.fire({
      title: 'Are you sure?',
      text: `You will not be able to recover ${employee.name}!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result: { isConfirmed: boolean }) => {
      if (result.isConfirmed) {
        this.employees = this.employees.filter(e => e.id !== employee.id);
        Swal.fire('Deleted!', `${employee.name} has been deleted.`, 'success');
      }
    });
  }

  openModel(employee:Employee) {
    if (this.newEmployee.name) {
      this.newEmployee.id = this.employees.length + 1;
      this.employees.push({ ...this.newEmployee });
      Swal.fire('Added!', 'Employee added successfully!', 'success');
      this.newEmployee = { id: 0, name: '', position: '', department: '', Age:" "};
    }}

  addEmployee() {
    if (this.newEmployee.name) {
      this.newEmployee.id = this.employees.length + 1;
      this.employees.push({ ...this.newEmployee });
      Swal.fire('Added!', 'Employee added successfully!', 'success');
      this.newEmployee = { id: 0, name: '', position: '', department: '', Age:" "};
    }
  }



  openModal(employee: Employee) {
    this.selectedEmployee = employee;
  }
}
