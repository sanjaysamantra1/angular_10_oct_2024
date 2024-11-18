import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArithematicoperationsComponent } from './arithematicoperations.component';

describe('ArithematicoperationsComponent', () => {
  let component: ArithematicoperationsComponent;
  let fixture: ComponentFixture<ArithematicoperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArithematicoperationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArithematicoperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
