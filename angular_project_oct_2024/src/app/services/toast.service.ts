import { Injectable } from '@angular/core';
import Snackbar from 'awesome-snackbar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  showError(msg: String) {
    new Snackbar(msg + "",
      { position: 'top-center', theme: 'dark', timeout: 3000 }
    );
  }
}
