import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) {
    console.log('child constructor');
  }
  ngOnInit() {
    console.log('child ngOnInit');
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data: any) => {
      console.log(data)
    });
  }
  ngOnChanges(changes: any) {
    console.log('child ngOnChanges');
    console.log(changes)
  }
  // ngDoCheck() {
  //   console.log('child ngDoCheck');
  // }
  // ngAfterContentInit() {
  //   console.log('child ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('child ngAfterContentChecked')
  // }
  // ngAfterViewInit() {
  //   console.log('child ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('child ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('child ngOnDestory');
  // }
}
