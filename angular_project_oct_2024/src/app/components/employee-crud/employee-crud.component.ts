import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-crud',
  standalone: true,
  imports: [],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css'
})
export class EmployeeCrudComponent {
  isLoading: boolean = false;
  employees: any;
  constructor(private employeeService: EmployeeService) {
  }
  ngOnInit() {
    this.isLoading = true;
    this.employeeService.getAllEmployees().subscribe(response => {
      this.employees = response;
      this.isLoading = false;
    })
  }
}
