import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { concatMap, forkJoin, from, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  standalone: true,
  imports: [],
  templateUrl: './observable-demo2.component.html',
  styleUrl: './observable-demo2.component.css'
})
export class ObservableDemo2Component {
  constructor(private httpClient: HttpClient) {
  }
  ngOnInit() {
    // this.promiseAllDemo();
    // this.forkJoinDemo()
    // this.mapDemo();
    // this.withoutMergeMap();
    // this.withMergeMap();
    this.concatMapDemo();
  }
  promiseAllDemo() {
    let userNames = ['sanjaysamantra1', 'siva-dev62', 'sivanalluri1'];

    let allResquests = userNames.map(userName => {
      return fetch(`https://api.github.com/users/${userName}`)
    });
    Promise.all(allResquests).then(allResponses => {
      console.log(allResponses)
      let requestArr = allResponses.map(response => response.json());
      console.log(requestArr)
      Promise.all(requestArr).then(responses => {
        console.log(responses)
      });
    });
  }

  forkJoinDemo() {
    let userNames = [1, 5, 7];
    let requestArr = userNames.map(userName => {
      return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${userName}`)
    });
    console.log(requestArr);
    forkJoin(requestArr).subscribe(responseArr => {
      console.log(responseArr)
    })
  }
  mapDemo() {
    let arr = [10, 20, 30, 40, 50];
    let numPublisher = from(arr);
    let squarePublisher = numPublisher.pipe(map(ele => ele * ele));
    // numPublisher.subscribe(val => console.log(val));
    squarePublisher.subscribe(val => console.log(val));
  }
  withoutMergeMap() {
    let usersPublisher = from([1, 2, 4, 7, 8]);
    usersPublisher.subscribe(OuterObservableResponse => {
      this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${OuterObservableResponse}`).subscribe(
        innerObservableResponse => {
          console.log(innerObservableResponse)
        }
      )
    })
  }
  withMergeMap() {
    let usersPublisher = from([1, 2, 4, 7, 8]);
    usersPublisher.pipe(mergeMap(OuterObservableResponse => {
      return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${OuterObservableResponse}`)
    })).subscribe(innerObservableResponse => {
      console.log(innerObservableResponse);
    });
  }
  concatMapDemo() {
    let usersPublisher = from([1, 2, 4, 7, 8]);
    usersPublisher.pipe(concatMap(OuterObservableResponse => {
      return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${OuterObservableResponse}`)
    })).subscribe(innerObservableResponse => {
      console.log(innerObservableResponse);
    });
  }
}
