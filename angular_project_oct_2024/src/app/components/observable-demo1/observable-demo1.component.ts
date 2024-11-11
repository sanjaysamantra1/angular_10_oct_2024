import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  standalone: true,
  imports: [],
  templateUrl: './observable-demo1.component.html',
  styleUrl: './observable-demo1.component.css'
})
export class ObservableDemo1Component {
  constructor(private httpClient: HttpClient) {

  }
  ngOnInit() {
    // this.promiseExample1();
    // this.observableExample1();
    this.observableExample2();
  }
  promiseExample1() {
    const user_url = 'https://jsonplaceholder.typicode.com/users';
    const user_promise = fetch(user_url);
    console.log(user_promise);
    user_promise.then(response => {
      response.json().then(finalData => {
        console.log(finalData)
      })
    })
  }
  observableExample1() {
    const user_url = 'https://jsonplaceholder.typicode.com/users';
    this.httpClient.get(user_url).subscribe((response) => {
      console.log(response);
    });
  }
  observableExample2(){
    let publisher1 = new Observable((observer)=>{
      observer.next('AAAAAAAAA');
      observer.next('BBBBBBBBB');
      observer.next('CCCCCCCCC');
      observer.next('DDDDDDDDD');
    });
  }
}
