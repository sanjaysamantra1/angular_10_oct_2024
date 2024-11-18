import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinalpipe',
  standalone: true,
})
export class OrdinalpipePipe implements PipeTransform {
  transform(ordinalString: string) {
    let ordinalArr = ordinalString.split(',');

    return ordinalArr.map((date) => {
      if (date.length == 0) {
        return date;
      }
      let lastNum = date[date.length - 1];
      if (lastNum == '1') {
        date = date + 'st';
      } else if (lastNum == '2') {
        date = date + 'nd';
      } else if (lastNum == '3') {
        date = date + 'rd';
      } else {
        date = date + 'th';
      }
      return date;
    });
  }
}
