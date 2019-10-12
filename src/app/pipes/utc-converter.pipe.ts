import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'utcConverter'
})
export class UtcConverterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var d = new Date(0);
    d.setUTCSeconds(value);
    return d;
  }

}
