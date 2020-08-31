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

        return user.FirstName.includes(searchTerm) || user.LastName.includes(searchTerm);

      // if (user.LastName) {
      //   return user.LastName.indexOf(searchTerm) > -1;
      // }
    });
  }

}
