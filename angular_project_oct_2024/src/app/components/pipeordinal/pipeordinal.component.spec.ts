import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeordinalComponent } from './pipeordinal.component';

describe('PipeordinalComponent', () => {
  let component: PipeordinalComponent;
  let fixture: ComponentFixture<PipeordinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeordinalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeordinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
