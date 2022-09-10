import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'species',
  standalone: true
})
export class SpeciesPipe implements PipeTransform {

  transform(value: string): string {
    if (value === 'Human') {
      return `${value.toLocaleLowerCase()} 🧑🏽`;
    } else if (value === 'Alien') {
      return `${value.toLocaleLowerCase()} 👽`;
    } else {
      return `${value.toLocaleLowerCase()} 👁`;
    }
  }

}
