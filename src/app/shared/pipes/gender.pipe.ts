import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
  standalone: true
})
export class GenderPipe implements PipeTransform {

  transform(value: string, addEmoji: boolean = true): string {
    if (value === 'Female') {
      return `She ${addEmoji ? '👩' : ''}`;
    } else if (value === 'Male') {
      return `He ${addEmoji ? '👱‍♂️' : ''}`;
    } else {
      return `It ${addEmoji ? '👾' : ''}`;
    }
  }

}
