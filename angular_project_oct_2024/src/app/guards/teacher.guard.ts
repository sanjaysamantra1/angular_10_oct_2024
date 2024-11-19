import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';

export const teacherGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  if (userService.userRole === 'teacher') {
    return true;
  } else {
    alert('Sorry!!, You dont have access to this page')
    return false;
  }
};
