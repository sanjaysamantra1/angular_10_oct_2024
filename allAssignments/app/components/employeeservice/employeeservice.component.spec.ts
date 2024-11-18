import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeserviceComponent } from './employeeservice.component';

describe('EmployeeserviceComponent', () => {
  let component: EmployeeserviceComponent;
  let fixture: ComponentFixture<EmployeeserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
