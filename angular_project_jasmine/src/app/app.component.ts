import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_project_jasmine';

  add(a: number, b: number) {
    return a + b;
  }
  mul(a: number, b: number) {
    return a * b;
  }

  isEven(n: number) {
    if (n % 2 == 0) {
      return 'even';
    } else {
      return 'odd';
    }
  }

  sumOfDigits(n: number) { // 125 = 8
    let sum = 0;
    while (n != 0) {
      let rem = n % 10;
      sum = sum + rem;
      n = Math.floor(n / 10);
    }
    return sum;
  }

  cars = ['tata', 'honda'];
  addNewCar(carName: string) {
    this.cars.push(carName);
  }

}
