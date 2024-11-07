import { Component } from '@angular/core';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math1',
  standalone: true,
  imports: [],
  templateUrl: './math1.component.html',
  styleUrl: './math1.component.css'
})
export class Math1Component {
  constructor(public mathService: MathService) {

  }
  ngOnInit() {
    this.mathService.add(2, 3);
  }
}
