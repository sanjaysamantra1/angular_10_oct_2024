import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-folderchild',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './folderchild.component.html',
  styleUrl: './folderchild.component.css',
  inputs: ['folder'],
})
export class FolderchildComponent {
  folder: any;

  toggle(item: any) {
    item.expand = !item.expand;
  }
}
