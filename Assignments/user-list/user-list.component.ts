import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users = [
    { name: 'Alice', age: 25, email: 'alice@example.com' },
    { name: 'Bob', age: 30, email: 'bob@example.com' },
    { name: 'Charlie', age: 35, email: 'charlie@example.com' }
  ];

  // State to manage the current view mode
  isTableView: boolean = true;

  // Toggle function for switching between views
  toggleView() {
    this.isTableView = !this.isTableView;
  }
}
