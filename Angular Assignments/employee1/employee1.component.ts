// employee1.component.ts
import { Component, OnInit } from '@angular/core';
import { Employee, Employee1Service } from '../employee1.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee1.component.html',
  styleUrls: ['./employee1.component.css']
})
export class Employee1Component implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  filterType: string = 'allEmployees';

  constructor(private employee1Service: Employee1Service) {}

  ngOnInit(): void {
    this.employees = this.employee1Service.getEmployees();
    this.applyFilter();
  }

  applyFilter(): void {
    switch (this.filterType) {
      case 'maleEmployees':
        this.filteredEmployees = this.employees.filter(emp => emp.gender === 'male');
        break;
      case 'femaleEmployees':
        this.filteredEmployees = this.employees.filter(emp => emp.gender === 'female');
        break;
      default:
        this.filteredEmployees = this.employees;
    }
  }
}
