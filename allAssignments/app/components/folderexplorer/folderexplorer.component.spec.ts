import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderexplorerComponent } from './folderexplorer.component';

describe('FolderexplorerComponent', () => {
  let component: FolderexplorerComponent;
  let fixture: ComponentFixture<FolderexplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FolderexplorerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolderexplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
