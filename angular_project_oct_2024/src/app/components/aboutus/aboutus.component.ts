import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
  constructor(private router: Router) {
  }
  doSomethingAndGoToHome() {
    console.log('Doing Something......');
    this.router.navigate(['/home']);
  }
}