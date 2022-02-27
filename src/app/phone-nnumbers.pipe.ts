import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNnumbers'
})
export class PhoneNnumbersPipe implements PipeTransform {

  transform(value: number,): string {
    return '0' + (value - (value % 10000000)) / 10000000 + "-" + value % 10000000;
  }

}
