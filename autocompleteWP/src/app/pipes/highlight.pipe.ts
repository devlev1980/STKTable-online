import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  transform(employee: string, searchTerm?: any): any {
    if (!employee || !searchTerm) {
      return employee;
    }


    if (!searchTerm) { return employee; }
    const re = new RegExp(searchTerm, 'gi');
    const newSpan = `<span class='highlight'>${searchTerm}</span>`;
    return  employee.replace(re, newSpan);
  }

}
