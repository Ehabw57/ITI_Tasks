import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard',
})
export class CardPipe implements PipeTransform {

  transform(value: string): string {
    const arr:string[] =  value.split('')
    arr.splice(4,0, '-')
    arr.splice(9,0, '-')
    arr.splice(14,0, '-')
    return arr.join('')
  }

}
