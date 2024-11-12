import { Component } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  standalone: true,
  imports: [],
  templateUrl: './http-demo1.component.html',
  styleUrl: './http-demo1.component.css'
})
export class HttpDemo1Component {


  ngOnInit() {
    // this.fetchDemo1();
    this.fetchDemo2();
  }

  fetchDemo1() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const usersPromise = fetch(url);
    usersPromise.then(response => {
      console.log(response);
      response.json().then(finalResponse => {
        console.log(finalResponse)
      })
    }).catch(err => {
      console.log('something went wrong');
    })
  }

  async fetchDemo2() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    try {
      const response = await fetch(url);
      const finalResponse = await response.json();
      console.log(finalResponse)
    } catch (err) {
      console.log(err);
    }
  }
}
