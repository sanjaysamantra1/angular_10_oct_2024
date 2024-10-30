import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArthimeticComponent } from './arthimetic.component';

describe('ArthimeticComponent', () => {
  let component: ArthimeticComponent;
  let fixture: ComponentFixture<ArthimeticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArthimeticComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArthimeticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
