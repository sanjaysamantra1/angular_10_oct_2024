import { Component, inject } from '@angular/core';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math2',
  standalone: true,
  imports: [],
  templateUrl: './math2.component.html',
  styleUrl: './math2.component.css'
})
export class Math2Component {
  public mathService: any;
  constructor() {
    this.mathService = inject(MathService);
  }
  mySub() {
    this.mathService.sub(20, 10)
  }
  myMul() {
    this.mathService.mul(4, 5)
  }
}
