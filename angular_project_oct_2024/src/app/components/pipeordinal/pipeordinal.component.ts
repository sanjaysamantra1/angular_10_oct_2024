import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdinalPipe } from "../../ordinal.pipe";


@Component({
  selector: 'app-pipeordinal',
  standalone: true,
  imports: [CommonModule, OrdinalPipe],
  templateUrl: './pipeordinal.component.html',
  styleUrl: './pipeordinal.component.css'
})

// @Pipe({
//   name: 'ordinal'
// })



export class PipeordinalComponent {
  title: string = 'Ordinal Pipe Example';
  numbers: number[] = [1, 2, 3, 4, 21, 22, 23, 24]; 
  transform(value: number): string {
    if (!value || isNaN(value)) return '';

    const suffixes = ['th', 'st', 'nd', 'rd'];
    const remainder = value % 100;

    return value + (suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0]);
  }

}
