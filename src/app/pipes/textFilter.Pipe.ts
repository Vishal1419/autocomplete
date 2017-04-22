import {Pipe, PipeTransform} from '@angular/core';
import { Person } from '../Models/person';

@Pipe({ 
    name: 'textFilter',
    pure: false
}) 
export class TextFilterPipe implements PipeTransform {
    transform(people: Person[], filter: string): any {
        if (!people || !filter) {
            return people;
        }
        return people.filter(person => person.firstName.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) !== -1
                                    || person.lastName.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) !== -1);
    } 
}