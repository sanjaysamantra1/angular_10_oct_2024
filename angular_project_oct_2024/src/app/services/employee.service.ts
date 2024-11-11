import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IEmployee } from '../models/iemployee';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
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
