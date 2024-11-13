import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './message3.component.html',
  styleUrl: './message3.component.css'
})
export class Message3Component {
  newMsg: string = '';
  constructor(private messageService: MessageService) {
  }

  sendMessage() {
    this.messageService.sendMessage(this.newMsg);
  }
  clearMessages() {
    this.messageService.clearMessages()
  }
}
