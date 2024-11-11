import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';
import { subscribe } from 'diagnostics_channel';


@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'] // Fixed typo: "styleUrl" => "styleUrls"
})
export class EmployeeAppComponent {
  employees: any; // Step 1: Initialize employees array

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getAllEmployees();
  }
  getAllEmployees(){
    this.employeeService.getEmployees().subscribe((data:any)=>{
      this.employees = data;
    });
  }
}