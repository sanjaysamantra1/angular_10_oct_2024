import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleparagraphComponent } from './toggleparagraph.component';

describe('ToggleparagraphComponent', () => {
  let component: ToggleparagraphComponent;
  let fixture: ComponentFixture<ToggleparagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleparagraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleparagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
