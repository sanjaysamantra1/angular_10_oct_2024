import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CatogiriesComponent } from './components/catogiries/catogiries.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarosulComponent } from './components/carosul/carosul.component';
import { BodyComponent } from './components/body/body.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,CatogiriesComponent,FooterComponent,CarosulComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'project1-name';

}