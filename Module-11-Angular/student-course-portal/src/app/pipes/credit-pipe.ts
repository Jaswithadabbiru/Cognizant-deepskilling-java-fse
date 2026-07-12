import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'credit',
  standalone: true
})
export class CreditPipe implements PipeTransform {

  transform(value: number): string {

    if (value >= 4) {
      return value + ' Credits (High)';
    }

    return value + ' Credits';
  }

}