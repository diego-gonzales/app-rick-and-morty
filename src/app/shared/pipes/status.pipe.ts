import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  standalone: true
})
export class StatusPipe implements PipeTransform {

  transform(value: string): string {
    if (value === 'Alive') {
      return `${value.toLocaleLowerCase()} 🌱.`;
    } else if (value === 'Dead') {
      return `${value.toLocaleLowerCase()} ☠.`;
    } else {
      return `${value.toLocaleLowerCase()} ⁉.`;
    }
  }

}
