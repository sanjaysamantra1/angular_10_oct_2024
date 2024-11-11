import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  viewMode: 'table' | 'card' = 'table';

  users = [
    { name: 'John Doe', email: 'john@example.com', age: 25 },
    { name: 'Jane Smith', email: 'jane@example.com', age: 30 },
    { name: 'Mike Johnson', email: 'mike@example.com', age: 35 }
  ];

  toggleView() {
    this.viewMode = this.viewMode === 'table' ? 'card' : 'table';
  }
}