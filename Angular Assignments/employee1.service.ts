// employee1.service.ts
import { Injectable } from '@angular/core';

export interface Employee {
  id: number;
  name: string;
  gender: 'male' | 'female';
  position: string;
}

@Injectable({
  providedIn: 'root'
})
export class Employee1Service {
  private employees: Employee[] = [
    { id: 1, name: 'John Doe', gender: 'male', position: 'Developer' },
    { id: 2, name: 'Jane Smith', gender: 'female', position: 'Designer' },
    { id: 3, name: 'Mike Johnson', gender: 'male', position: 'Manager' },
    { id: 4, name: 'Emily Clark', gender: 'female', position: 'Analyst' }
  ];

  getEmployees(): Employee[] {
    return this.employees;
  }
}
