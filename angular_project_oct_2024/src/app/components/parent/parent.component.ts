import { Component, KeyValueDiffer, KeyValueDiffers } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    FormsModule,
    Child1Component,
    Child2Component
],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  flag : boolean = true;

  a: number;
  nameParent: string = '';
  user = { name: 'John Doe' };
  private userDiffer: KeyValueDiffer<string, any>;
  changes: string[] = [];

  changeUserData() {
    this.user.name = 'sourav';
  }

  receiveDataFromChild(dataFromChild: string) {
    this.nameParent = dataFromChild;
  }

  constructor(private keyValueDiffers: KeyValueDiffers) {
    this.a = 100;
    console.log("Parent constructor")
    this.userDiffer = this.keyValueDiffers.find(this.user).create();

    console.log(document.getElementById('div1'))
  }
  ngOnChanges() {
    console.log('Parent ngOnChanges');
  }
  ngOnInit() {
    console.log('Parent ngOnInit');
  }
  ngDoCheck() {
    console.log('Parent ngDoCheck');
    const userChanges = this.userDiffer.diff(this.user);
    if (userChanges) {
      userChanges.forEachChangedItem(item => {
        this.changes.push(`Property ${item.key} changed from ${item.previousValue} to ${item.currentValue}`);
      });
    }
  }
  ngAfterContentInit() {
    console.log('Parent ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('Parent ngAfterContentChecked')
  }
  ngAfterViewInit() {
    console.log('Parent ngAfterViewInit');
    console.log(document.getElementById('div1'))
  }
  ngAfterViewChecked() {
    console.log('Parent ngAfterViewChecked');
  }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }
}
