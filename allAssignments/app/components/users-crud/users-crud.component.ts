import { Component } from '@angular/core';
import { UsersService } from '../../users.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-users-crud',
  standalone: true,
  imports: [CommonModule, FormsModule, AddUserComponent],
  templateUrl: './users-crud.component.html',
  styleUrl: './users-crud.component.css',
})
export class UsersCrudComponent {
  users: any;
  user: any;

  id = '';
  uId: number | null = null;
  name = '';
  age: number | null = null;
  gender = '';
  isTrue: any;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.getAllUsers();
  }

  // get all the users
  getAllUsers() {
    this.isTrue = false;
    this.usersService.getAllUsers().subscribe((data) => {
      this.users = data;
      this.isTrue = true;
    });
  }

  // notifi parent component about the adding user
  notifiAboutAddedUser() {
    this.getAllUsers();
  }

  // edit button
  onClickEdit(id: string) {
    this.usersService.getUser(id).subscribe((data: any) => {
      this.id = data.id;
      this.uId = data.uId;
      this.name = data.name;
      this.age = data.age;
      this.gender = data.gender;
    });
  }

  // save changes button
  onSaveEdit(id: string) {
    this.usersService
      .updateUser(id, {
        name: this.name,
        age: this.age,
        gender: this.gender,
      })
      .subscribe((data) => {
        this.getAllUsers();
      });
  }

  // delete user
  onClickDelete(id: string) {
    this.usersService.deleteUser(id).subscribe((data) => {
      this.getAllUsers();
    });
  }
}
