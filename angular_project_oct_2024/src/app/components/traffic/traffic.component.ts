import { Component } from '@angular/core';

@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css'
})
export class TrafficComponent {
  config: any;
  colorsArr: string[];
  selectedColor: string = 'red';
  timer: any;
  constructor() {
    this.config = {
      "red": { nextColor: 'green', duration: 4000 },
      "green": { nextColor: 'yellow', duration: 3000 },
      "yellow": { nextColor: 'red', duration: 1000 }
    };
    this.colorsArr = Object.keys(this.config);
  }
  ngDoCheck() {
    console.log('Do check called.....')
    const { duration, nextColor } = this.config[this.selectedColor];
    this.timer = setTimeout(() => {
      this.selectedColor = nextColor;
    }, duration)
  }
  ngOnDestroy() {
    clearTimeout(this.timer);
  }
}
