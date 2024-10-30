import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective {
  // ElementRef is a pre-defined Service
  // Dependency Injection : a service is injected to a component
  /* constructor(private ele: ElementRef) {
    console.log(this.ele)
  } */
  ele = inject(ElementRef); // Dependency Injection

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight('yellow', 'red');
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight('', '');
  }
  private highlight(bgColor: string, color: string) {
    this.ele.nativeElement.style.backgroundColor = bgColor;
    this.ele.nativeElement.style.color = color;
  }


}
