import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CounterComponent } from './components/counter/counter.component';
import { BlurpasswordComponent } from './components/blurpassword/blurpassword.component';
import { ArithematicoperationsComponent } from './components/arithematicoperations/arithematicoperations.component';
import { StatedropdownComponent } from './components/statedropdown/statedropdown.component';
import { ToggleparagraphComponent } from './components/toggleparagraph/toggleparagraph.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { CardComponent } from './components/card/card.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { CrudcomponentComponent } from './components/crudcomponent/crudcomponent.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { PipesComponentComponent } from './components/pipes-component/pipes-component.component';
import { UserCrudComponent } from './components/user-crud/user-crud.component';
import { EmployeeserviceComponent } from './components/employeeservice/employeeservice.component';
import { UsersCrudComponent } from './components/users-crud/users-crud.component';
import { DisplayDataComponent } from './components/display-data/display-data.component';
import { TestComponent } from './components/test/test.component';
import { FolderexplorerComponent } from './components/folderexplorer/folderexplorer.component';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    CategoriesComponent,
    CarouselComponent,
    CounterComponent,
    BlurpasswordComponent,
    ArithematicoperationsComponent,
    StatedropdownComponent,
    ToggleparagraphComponent,
    TextareaComponent,
    CardComponent,
    ProductlistComponent,
    CrudcomponentComponent,
    StarRatingComponent,
    PipesComponentComponent,
    UserCrudComponent,
    EmployeeserviceComponent,
    UsersCrudComponent,
    DisplayDataComponent,
    TestComponent,
    FolderexplorerComponent,
    FormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'flipkar_demo';
}
