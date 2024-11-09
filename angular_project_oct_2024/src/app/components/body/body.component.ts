import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectiveComponent } from '../directive/directive.component';
import { UserListComponent } from '../user-list/user-list.component';
import { UsersComponent } from '../users/users.component';
import { Demo1Component } from '../demo1/demo1.component';
import { PipeComponent } from '../pipe/pipe.component';
import { ParentComponent } from '../parent/parent.component';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { TrafficComponent } from '../traffic/traffic.component';
import { Demo2Component } from '../demo2/demo2.component';
import { Math1Component } from '../math1/math1.component';
import { Math2Component } from '../math2/math2.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { EmployeeCrudComponent } from '../employee-crud/employee-crud.component';
import { HttpDemo1Component } from '../http-demo1/http-demo1.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    DatabindingComponent,
    DirectiveComponent,
    UserListComponent,
    UsersComponent,
    PipeComponent,
    ParentComponent,
    MyModalComponent,
    TrafficComponent,
    Demo1Component,
    Demo2Component,
    Math1Component,
    Math2Component,
    ProductListComponent,
    EmployeeCrudComponent,
    HttpDemo1Component
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  flag:boolean = true;
}
