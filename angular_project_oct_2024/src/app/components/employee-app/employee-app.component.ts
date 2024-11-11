import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-employee-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-app.component.html',
  styleUrl: './employee-app.component.css'
})
export class EmployeeAppComponentApp {
filteredEmployees: any;
onFilterChange(arg0: any) {
throw new Error('Method not implemented.');
}



}
