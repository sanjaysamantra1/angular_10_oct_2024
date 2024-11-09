import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  api_url = 'http://localhost:3000/employees'

  constructor(private httpClient: HttpClient) {
  }
  getAllEmployees() {
    return this.httpClient.get(this.api_url);
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
