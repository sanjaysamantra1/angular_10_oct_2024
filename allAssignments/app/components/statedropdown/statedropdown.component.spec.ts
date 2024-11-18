import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatedropdownComponent } from './statedropdown.component';

describe('StatedropdownComponent', () => {
  let component: StatedropdownComponent;
  let fixture: ComponentFixture<StatedropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatedropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatedropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
