import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  standalone: true,
})
export class AgePipe implements PipeTransform {
  transform(DOB: any) {
    if (DOB && DOB.length == 4) {
      let currDate: any = new Date();
      return currDate.getFullYear() - DOB;
    } else {
      return 'N/A';
    }
  }
}
