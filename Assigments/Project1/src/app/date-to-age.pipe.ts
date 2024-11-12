import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateToAge',
  standalone: true
})
export class DateToAgePipe implements PipeTransform {
  transform(year: number): number {
    if (!year) return 0; // Default if no year provided
    const birthDate = new Date(year, 0, 1);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}