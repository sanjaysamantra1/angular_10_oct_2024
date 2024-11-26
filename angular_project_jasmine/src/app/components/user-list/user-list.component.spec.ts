import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { provideHttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';
import { inject } from '@angular/core';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService : UserService;

  beforeAll(() => { // 1  (1 time initialization)
    console.log('before all');
  })
  beforeEach(async () => { // to execute some logic before every it()
    console.log('beforeEach')
    await TestBed.configureTestingModule({
      imports: [UserListComponent],
      providers: [
        provideHttpClient(),
        UserService
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userService = TestBed.inject(UserService)
  });
  afterEach(() => { // to execute some logic after every it()
    console.log('after each')
  })
  afterAll(() => { // 1   (clearing all the)
    console.log('after all')
  })

  it('userlist component it-1', () => {
    expect(component).toBeTruthy();
    console.log('It-1')
  });
  it('userlist component it-2', () => {
    expect(component).toBeTruthy();
    console.log('It-2')
  });
  it('userlist component it-3', () => {
    expect(component).toBeTruthy();
    console.log('It-3')
  });
  it('should verify getAllUsers', () => {
    const mockresponse: any[] = [{}, {}];
    spyOn(userService, 'getAllUsers').and.returnValue(of(mockresponse));
    component.fetchUsers();
    fixture.detectChanges();
    expect(component.users.length).toBe(2);
  });
});
