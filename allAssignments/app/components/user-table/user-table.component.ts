import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css',
  inputs: ['employees'],
  outputs: ['myEvent'],
})
export class UserTableComponent {
  employees: any;
  myEvent = new EventEmitter();
  onClickDelete(index: number) {
    this.myEvent.emit(index);
  }
}
