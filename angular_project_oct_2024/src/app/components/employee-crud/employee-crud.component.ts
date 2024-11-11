import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { IEmployee } from '../../models/iemployee';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-crud',
  standalone: true,
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
