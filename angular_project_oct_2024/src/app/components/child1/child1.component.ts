import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  inputs: ['aChild1'],
  outputs: ['nameEvent']
})
export class Child1Component {
  aChild1: any;
  b: number = 200;
  name: string = 'Sachin Tendulkar';

  nameEvent = new EventEmitter();
  sendDataToParent() {
    this.nameEvent.emit(this.name);
  }
}
