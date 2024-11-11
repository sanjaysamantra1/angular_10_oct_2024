import { Component } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';
import { Employee1Component } from '../../employee1/employee1.component';
import { UserComponent } from '../../user/user.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    ParentComponent,Employee1Component,UserComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
