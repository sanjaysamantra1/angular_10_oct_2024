import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectiveComponent } from '../directive/directive.component';
import { UserListComponent } from '../user-list/user-list.component';
import { UsersComponent } from '../users/users.component';
import { Demo1Component } from '../demo1/demo1.component';
import { PipeComponent } from '../pipe/pipe.component';
import { ParentComponent } from '../parent/parent.component';
import { MyModalComponent } from '../my-modal/my-modal.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    DatabindingComponent,
    DirectiveComponent,
    UserListComponent,
    UsersComponent,
    Demo1Component,
    PipeComponent,
    ParentComponent,
    MyModalComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
