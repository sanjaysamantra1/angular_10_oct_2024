import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe',
  standalone:true
})
export class SearchpipePipe implements PipeTransform {
  transform(employees: any[], searchTerm: string): any[] {
    if (!employees || !searchTerm) return employees;
    searchTerm = searchTerm.toLowerCase();
    return employees.filter(employee =>
      employee.name.toLowerCase().includes(searchTerm) ||
      employee.position.toLowerCase().includes(searchTerm)
    );
  }
}
