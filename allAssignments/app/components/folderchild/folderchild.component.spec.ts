import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderchildComponent } from './folderchild.component';

describe('FolderchildComponent', () => {
  let component: FolderchildComponent;
  let fixture: ComponentFixture<FolderchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FolderchildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolderchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
