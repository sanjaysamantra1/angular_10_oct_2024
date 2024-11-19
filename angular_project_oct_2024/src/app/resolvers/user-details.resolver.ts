import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { UserService } from '../services/user.service';

export const userDetailsResolver: ResolveFn<Object> = (route, state) => {
  return inject(UserService).getUserById(+route.params['id']);
};
