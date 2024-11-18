import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../users.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
  outputs: ['notifiParent'],
})
export class AddUserComponent {
  constructor(private usersService: UsersService) {}
  uId: number | null = null;
  name = '';
  age: number | null = null;
  gender = '';

  notifiParent = new EventEmitter();
  onAddUser() {
    this.usersService
      .addUser({
        uId: this.uId,
        name: this.name,
        age: this.age,
        gender: this.gender,
      })
      .subscribe((data) => {
        this.notifiParent.emit();
      });
  }

  clearForm() {
    this.uId = null;
    this.name = '';
    this.age = null;
    this.gender = '';
  }
}
