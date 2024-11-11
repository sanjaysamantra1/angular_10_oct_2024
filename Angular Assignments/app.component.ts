import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ToggleParagraphComponent } from './components/toggle-paragraph/toggle-paragraph.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { StatesComponent } from './components/states/states.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { PasswordComponent } from './components/password/password.component';
import { CounterComponent } from './components/counter/counter.component';
import { ViewComponent } from './components/view/view.component';
import { ProductsComponent } from './components/products/products.component';
import { EmployeeCRUDComponent } from './components/employee-crud/employee-crud.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { BodyComponent } from './components/body/body.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    CategoriesComponent,
    CarouselComponent,
    ToggleParagraphComponent,
    TextAreaComponent,
    StatesComponent,
    CalculatorComponent,
    PasswordComponent,
    CounterComponent,
    ViewComponent,
    ProductsComponent,
    EmployeeCRUDComponent,
    EmployeeComponent,
    BodyComponent

     // Add FormsModule here
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
}
