import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormstatusService {
  hasChanges: boolean = true;
  constructor() { }
}
