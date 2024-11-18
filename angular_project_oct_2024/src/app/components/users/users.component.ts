import { Component } from '@angular/core';
import { users } from './user_data';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgxPaginationModule,
    RouterLink
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users = users; // declaring a class variable 'users' assigning the imported value
  p: number = 1;
}
