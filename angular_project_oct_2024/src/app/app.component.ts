import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ToggleParagraphComponent } from './components/toggle-paragraph/toggle-paragraph.component';
import { CharCounterComponent } from './components/char-counter/char-counter.component';
import { StateDropdownComponent } from './state-dropdown/state-dropdown.component';
import { CalculatorComponent } from "./components/calculator/calculator.component";
import { ToggleInputComponent } from "./components/toggle-input/toggle-input.component";
import { CounterComponent } from "./components/counter/counter.component";
import { UserListComponent } from './components/user-list/user-list.component';
import { EmployeeCRUDComponent } from "./components/employee-crud/employee-crud.component";
import { PipeordinalComponent } from './components/pipeordinal/pipeordinal.component';
import { AgePipe } from './age.pipe';
import { EmployeeAppComponent } from "./components/employee/employee.component";
import {EmployeeAppComponentApp} from "./components/employee-app/employee-app.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavbarComponent,
    CategoriesComponent,
    CarouselComponent,
    ToggleParagraphComponent,
    CharCounterComponent,
    StateDropdownComponent,
    CalculatorComponent, 
    ToggleInputComponent,
     CounterComponent,
      UserListComponent,
       EmployeeCRUDComponent,
        PipeordinalComponent,
         AgePipe,
          EmployeeAppComponent,
          EmployeeAppComponentApp],


  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

  
})
export class AppComponent {
  title = 'Ordinal Pipe Example';
  numbers = [1, 2, 3, 4, 21, 22, 23, 24];
}

