import { Pipe, PipeTransform } from '@angular/core';
import { Students } from '../models/students';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(Students: Students[], searchValue: string) {
    if(!Students || !searchValue) {
      return Students;
    }
    return Students.filter(val => val.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) ||
    Students.filter(val => val.age.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
  }

}
