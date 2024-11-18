import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlurpasswordComponent } from './blurpassword.component';

describe('BlurpasswordComponent', () => {
  let component: BlurpasswordComponent;
  let fixture: ComponentFixture<BlurpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlurpasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlurpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
