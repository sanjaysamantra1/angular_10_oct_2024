import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterFunctionComponent } from './counter-function.component';

describe('CounterFunctionComponent', () => {
  let component: CounterFunctionComponent;
  let fixture: ComponentFixture<CounterFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterFunctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
