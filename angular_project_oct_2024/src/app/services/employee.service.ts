import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Employee {
  id: number;
  name: string;
  gender: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employees: Employee[] = [
    { id: 1, name: 'John Doe', gender: 'male' },
    { id: 2, name: 'Jane Smith', gender: 'female' },
    { id: 3, name: 'Michael Johnson', gender: 'male' },
    { id: 4, name: 'Emily Davis', gender: 'female' }
    // Add more employees if you like
  ];

  getEmployees(): Observable<Employee[]> {
    return of(this.employees); // Wrap the array in an Observable
  }
}

