import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatogiriesComponent } from './catogiries.component';

describe('CatogiriesComponent', () => {
  let component: CatogiriesComponent;
  let fixture: ComponentFixture<CatogiriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatogiriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatogiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
