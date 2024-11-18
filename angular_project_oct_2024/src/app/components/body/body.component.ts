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
import { ObservableDemo1Component } from '../observable-demo1/observable-demo1.component';
import { ObservableDemo2Component } from '../observable-demo2/observable-demo2.component';
import { ObservableDemo3Component } from '../observable-demo3/observable-demo3.component';
import { ObservableDemo4Component } from '../observable-demo4/observable-demo4.component';
import { Message1Component } from '../message1/message1.component';
import { Message2Component } from '../message2/message2.component';
import { Message3Component } from '../message3/message3.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoAddComponent } from '../todo-add/todo-add.component';
import { SignalDemo1Component } from '../signal-demo1/signal-demo1.component';
import { FormDemo1Component } from '../form-demo1/form-demo1.component';
import { FormDemo2Component } from '../form-demo2/form-demo2.component';
import { FormDemo3Component } from '../form-demo3/form-demo3.component';
import { RouterOutlet } from '@angular/router';

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
    HttpDemo1Component,
    ObservableDemo1Component,
    ObservableDemo2Component,
    ObservableDemo3Component,
    ObservableDemo4Component,
    Message1Component,
    Message2Component,
    Message3Component,
    TodoListComponent,
    TodoAddComponent,
    SignalDemo1Component,
    FormDemo1Component,
    FormDemo2Component,
    FormDemo3Component,
    RouterOutlet
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  flag:boolean = true;
}
