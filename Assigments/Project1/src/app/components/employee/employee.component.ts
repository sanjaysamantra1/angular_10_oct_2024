import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AgePipe } from '../../age.pipe';
import { DateToAgePipe } from '../../date-to-age.pipe';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, AgePipe, DateToAgePipe],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  numbers: number[] = [1990, 1985, 2000, 1975];
}