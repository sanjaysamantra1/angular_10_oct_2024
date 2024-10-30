import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-function',
  standalone: true,
  imports: [],
  templateUrl: './counter-function.component.html',
  styleUrl: './counter-function.component.css'
})
export class CounterFunctionComponent {

  
  counter: number = 0;

  
  increment() {
    this.counter++;
  }

  
  decrement() {
    this.counter--;
  }

  
  reset() {
    this.counter = 0;

}
}
