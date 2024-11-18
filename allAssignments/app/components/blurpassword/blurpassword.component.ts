import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blurpassword',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blurpassword.component.html',
  styleUrl: './blurpassword.component.css',
})
export class BlurpasswordComponent {
  changeType: string = 'password';
  onClickCheckBox() {
    if (this.changeType === 'password') this.changeType = 'text';
    else this.changeType = 'password';
  }
}
