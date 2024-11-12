import { Location } from '@angular/common';
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[backbutton]',
  standalone: true
})
export class BackbuttonDirective {

  // Dependency Injection (Injecting a service into a component/directive)
  constructor(private location: Location) { }

  @HostListener('click')
  clickHandler() {
    this.location.back();
  }

}
