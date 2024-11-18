import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css',
  outputs: ['myEvent1'],
})
export class UserAddComponent {
  eId: number | null = null;
  name: string | null = null;
  salary: number | null = null;
  gender: string | null = null;
  myEvent1 = new EventEmitter();
  clearForm() {
    this.eId = null;
    this.name = null;
    this.salary = null;
    this.gender = null;
  }
  onSubmitClick() {
    let employee = {
      eId: this.eId,
      name: this.name,
      sal: this.salary,
      gender: this.gender,
    };
    this.myEvent1.emit(employee);
    this.clearForm();
  }
}
