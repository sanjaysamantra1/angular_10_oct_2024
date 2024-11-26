import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: any;
  constructor(private userService: UserService) {
  }
  ngOnInit() {
    
  }
  fetchUsers(){
    this.userService.getAllUsers().subscribe(response => {
      this.users = response;
    });
  }
}
