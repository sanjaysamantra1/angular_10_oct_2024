import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addEmployee } from '../../ngrx/actions/employee.actions';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-add',
  standalone: true,
  imports: [],
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css'
})
export class EmployeeAddComponent {

  constructor(private store: Store) {

  }
  addAnEmployee(eId: any, firstName: any, lastName: any, sal: any, gender: any) {
    const newEmp = new Employee(eId, firstName, lastName, sal, gender);
    this.store.dispatch(addEmployee({ employee: newEmp }))
  }
}
