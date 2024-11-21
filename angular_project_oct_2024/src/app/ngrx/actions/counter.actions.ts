import { createAction } from '@ngrx/store';

export const increment = createAction('I am increment Action');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

// increment is a function
// increment is an action creator, it returns action information