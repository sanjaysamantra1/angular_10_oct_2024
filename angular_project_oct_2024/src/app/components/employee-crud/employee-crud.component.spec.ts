import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
import { EmployeeCRUDComponent } from './employee-crud.component';

describe('EmployeeCRUDComponent', () => {
  let component: EmployeeCRUDComponent;
  let fixture: ComponentFixture<EmployeeCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCRUDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCRUDComponent);
=======
import { EmployeeCrudComponent } from './employee-crud.component';

describe('EmployeeCrudComponent', () => {
  let component: EmployeeCrudComponent;
  let fixture: ComponentFixture<EmployeeCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCrudComponent);
>>>>>>> e869076cb2add4379d4b28d9d144d2ff771d8377
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
