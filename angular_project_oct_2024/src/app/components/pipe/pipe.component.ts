import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RemainingPipe } from '../../pipes/remaining.pipe';
import { FormsModule } from '@angular/forms';
import { MySortPipe } from '../../pipes/my-sort.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RemainingPipe,
    MySortPipe
  ],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  myName: string = 'SanJaY sAmAnTRa';
  sal: number = 5000;
  today = new Date();
  user = { name: 'sachin', age: 45, add: 'mumbai' };
  msg1: string = '';
  msg2: string = '';
  arr = [10, 50, 30, 20, 40];
}
