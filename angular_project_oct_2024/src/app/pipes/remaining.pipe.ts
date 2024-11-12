import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
  standalone: true,
  // pure: false // Impure Pipe
})
export class RemainingPipe implements PipeTransform {

  transform(msg: string, maxLength: number = 100) {
    console.log('Remaining Pipe Called...')
    return maxLength - msg.length;
  }
}
