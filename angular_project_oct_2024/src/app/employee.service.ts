import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

 
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) {}

  getEmployees() {
    return this.httpClient.get('https://api.example.com/employees');
  }
}