import { Component} from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  userForm: FormGroup;
  isEdit = false;
  currentUserId: number | null = null;

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18)]]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.isEdit && this.currentUserId !== null) {
      // Update user
      this.userService.updateUser(this.currentUserId, this.userForm.value).subscribe();
    } else {
      // Add new user
      this.userService.addUser(this.userForm.value).subscribe();
    }
    this.userForm.reset();
    this.isEdit = false;
    this.currentUserId = null;
  }

  setUserData(user: any) {
    this.isEdit = true;
    this.currentUserId = user.id;
    this.userForm.patchValue(user);
  }

  cancelEdit() {
    this.isEdit = false;
    this.currentUserId = null;
    this.userForm.reset();
  }
}
