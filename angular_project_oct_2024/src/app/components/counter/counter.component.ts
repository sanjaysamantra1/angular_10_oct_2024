import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../ngrx/actions/counter.actions';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<any>) {
    this.count$ = this.store.select('count');
  }

  increment() {
    const incremnetActionInfo = increment();
    console.log(incremnetActionInfo)
    this.store.dispatch(incremnetActionInfo);
  }
  decrement() {
    this.store.dispatch({type:'[Counter Component] Decrement'});
  }
  reset() {
    this.store.dispatch(reset());
  }
}
