import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';

@Component({
  selector: 'app-demo1',
  standalone: true,
  imports: [],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css'
})
export class Demo1Component {
  showAlert() {
    alert('Hellooooooooooo HIiiiiiiii')
  }
  showAlert2() {
    Swal.fire('Good job!', 'You clicked the button!', 'success');
  }
  openSnackBar() {
    new Snackbar('Helloooo, Good Morning',
      { position: 'top-center', theme: 'dark', timeout: 3000 }
    );
  }
  timer: any;
  constructor() {
    this.timer = setInterval(console.log, 1000, 'HIiiiii-I am from Demo-1')
  }
  ngOnDestroy() {
    clearInterval(this.timer)
  }
}
