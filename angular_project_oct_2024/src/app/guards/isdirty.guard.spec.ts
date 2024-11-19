import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { isdirtyGuard } from './isdirty.guard';

describe('isdirtyGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isdirtyGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
