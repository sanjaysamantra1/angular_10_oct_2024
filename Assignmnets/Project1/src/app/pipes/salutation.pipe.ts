import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation',
  standalone: true
})
export class SalutationPipe implements PipeTransform {

  transform(value: string, gender: string): string {
    if (gender === 'male') {
      return `Mr. ${value}`;
    } else if (gender === 'female') {
      return `Miss. ${value}`;
    }
    return value; // Default case
  }

}
