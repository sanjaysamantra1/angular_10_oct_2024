import { CanDeactivateFn } from '@angular/router';

export const isdirtyGuard: CanDeactivateFn<unknown> = (component: any, currentRoute, currentState, nextState) => {
  if (!component.hasChanges) {
    return true;
  } else {
    alert('Please save current page before you leave')
    return false;
  }
};
