import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation',
  standalone:true
})
export class SalutationPipe implements PipeTransform {
  transform(name: string, gender: string): string {
    return gender === 'Male' ? `Mr. ${name}` : `Miss. ${name}`;
  }
}
