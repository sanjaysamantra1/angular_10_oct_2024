import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeServiceService } from '../../services/employee-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employeeservice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employeeservice.component.html',
  styleUrl: './employeeservice.component.css',
})
export class EmployeeserviceComponent {
  users: any;
  constructor(private employeeService: EmployeeServiceService) {
    this.users = this.employeeService.getData();
  }

  usersFilter(gender: string) {
    this.users = this.employeeService.usersFilter(gender);
  }
}
