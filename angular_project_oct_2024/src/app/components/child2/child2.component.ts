import { Component } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  inputs: ['aChild2','b']
})
export class Child2Component {
  aChild2: any;
  b:any;
}
