import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ToggleParagraphComponent } from './components/toggle-paragraph/toggle-paragraph.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { StateDropdownComponent } from './components/state-dropdown/state-dropdown.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { InputBoxComponent } from './components/input-box/input-box.component';
import { CounterFunctionComponent } from './components/counter-function/counter-function.component';
import { UserDisplayComponent } from './components/user-display/user-display.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { EmployeeComponent } from './components/employee/employee.component';
 
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
    StateDropdownComponent,
    CalculatorComponent,
    InputBoxComponent,
    CounterFunctionComponent,
    UserDisplayComponent,
    ProductsListComponent,
    EmployeeComponent
     
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project1';
}
