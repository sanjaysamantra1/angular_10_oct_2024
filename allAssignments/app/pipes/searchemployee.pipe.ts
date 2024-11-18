import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchemployee',
  standalone: true,
})
export class SearchemployeePipe implements PipeTransform {
  transform(employees: any, search: string) {
    return employees.filter((employee: any) => {
      return (
        employee.name.includes(search) ||
        employee.gender.includes(search) ||
        String(employee.sal).includes(search)
      );
    });
  }
}
