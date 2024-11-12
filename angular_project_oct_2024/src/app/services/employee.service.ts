<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Employee {
  id: number;
  name: string;
  gender: string;
}
=======
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IEmployee } from '../models/iemployee';
import { Employee } from '../models/employee';
>>>>>>> e869076cb2add4379d4b28d9d144d2ff771d8377

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
<<<<<<< HEAD

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

=======
  api_url = 'http://localhost:3000/employees'

  constructor(private httpClient: HttpClient) {
  }
  getAllEmployees(): Observable<Employee[]> {
    console.log("I am service")
    return this.httpClient.get<Employee[]>(this.api_url, { observe: 'body' }).pipe(
      map((response: Employee[]) => {
        return response.map((emp: Employee) => {
          return new Employee(emp.id, emp.firstName, emp.lastName, emp.sal, emp.gender);
        });
      })
    );
  }
  getOneEmployee(id: number) {
    return this.httpClient.get(`this.api_url/${id}`);
  }
  addEmployee(newEmp: any) {
    return this.httpClient.post(this.api_url, newEmp);
  }
  updateEmployee(id: number, payload: any) {
    return this.httpClient.patch(`this.api_url/${id}`, payload);
  }
  deleteEmployee(id: number) {
    return this.httpClient.delete(`this.api_url/${id}`);
  }
}
>>>>>>> e869076cb2add4379d4b28d9d144d2ff771d8377
