import { Component } from '@angular/core';
import { UserTableComponent } from '../user-table/user-table.component';
import { UserCardComponent } from '../user-card/user-card.component';
import { UserAddComponent } from '../user-add/user-add.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-crud',
  standalone: true,
  imports: [
    UserTableComponent,
    UserCardComponent,
    UserAddComponent,
    FormsModule,
  ],
  templateUrl: './user-crud.component.html',
  styleUrl: './user-crud.component.css',
})
export class UserCrudComponent {
  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' },
  ];
  getDeleteIndex(index: number) {
    this.employees.splice(index, 1);
  }
  getNewUser(employee: any) {
    this.employees.push(employee);
  }
}
