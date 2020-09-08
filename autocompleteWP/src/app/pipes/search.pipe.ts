import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(employees: any[], searchTerm: any): any {
    if (!employees || !searchTerm) {
      return employees;
    }
    return employees.filter((user) => {
        return user.FirstName.toLowerCase().includes(searchTerm.toLowerCase()) || user.LastName.toLowerCase().includes(searchTerm.toLowerCase()) || user.FullName.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

}
