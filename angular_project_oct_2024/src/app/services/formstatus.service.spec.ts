import { TestBed } from '@angular/core/testing';

import { FormstatusService } from './formstatus.service';

describe('FormstatusService', () => {
  let service: FormstatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormstatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
