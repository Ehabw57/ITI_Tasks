import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard',
})
export class CardPipe implements PipeTransform {
  transform(value: string): string {
    const arr: string[] = [];
    for (let i = 0; i < value.length; i += 4) {
      arr.push(value.slice(i, i + 4));
    }
    return arr.join('-');
  }
}
