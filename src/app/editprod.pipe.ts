import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'editprod'
})
export class EditprodPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
