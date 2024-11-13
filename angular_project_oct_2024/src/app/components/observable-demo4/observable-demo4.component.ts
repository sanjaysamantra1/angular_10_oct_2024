import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-observable-demo4',
  standalone: true,
  imports: [],
  templateUrl: './observable-demo4.component.html',
  styleUrl: './observable-demo4.component.css'
})
export class ObservableDemo4Component {
  constructor() {

  }
  ngOnInit() {
    // this.subjectDemo();
    // this.behaviourSubjectDemo();
    // this.replaySubjectDemo();
    this.asyncSubjectDemo();
  }
  subjectDemo() {
    let mySubject = new Subject();
    mySubject.next('AAAAA');
    mySubject.subscribe(val => console.log('Subscriber-1:: ', val));
    mySubject.next('BBBBB');
    mySubject.next('CCCCC');
    mySubject.subscribe(val => console.log('Subscriber-2:: ', val));
    mySubject.next('DDDDD');
  }
  behaviourSubjectDemo() {
    let mySubject = new BehaviorSubject('AAAAA');
    mySubject.subscribe(val => console.log('Subscriber-1:: ', val));
    mySubject.next('BBBBB');
    mySubject.next('CCCCC');
    mySubject.subscribe(val => console.log('Subscriber-2:: ', val));
    mySubject.next('DDDDD');
  }
  replaySubjectDemo() {
    let mySubject = new ReplaySubject();
    mySubject.next('AAAAA');
    mySubject.subscribe(val => console.log('Subscriber-1:: ', val));
    mySubject.next('BBBBB');
    mySubject.next('CCCCC');
    mySubject.subscribe(val => console.log('Subscriber-2:: ', val));
    mySubject.next('DDDDD');
  }
  asyncSubjectDemo() {
    let mySubject = new AsyncSubject();
    mySubject.next('AAAAA');
    mySubject.subscribe(val => console.log('Subscriber-1:: ', val));
    mySubject.next('BBBBB');
    mySubject.next('CCCCC');
    mySubject.subscribe(val => console.log('Subscriber-2:: ', val));
    mySubject.next('DDDDD');
    mySubject.complete();
  }
}
