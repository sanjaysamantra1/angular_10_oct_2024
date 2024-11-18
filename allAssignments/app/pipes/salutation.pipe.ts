import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation',
  standalone: true,
})
export class SalutationPipe implements PipeTransform {
  transform(employeeName: any, gender: string) {
    if (gender == 'male') {
      return 'Mr. ' + employeeName;
    } else {
      return 'Miss. ' + employeeName;
    }
  }
}
