import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  standalone:true
})
export class AgePipe implements PipeTransform {
  transform(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
