import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Pipe({
  name: 'city'
})
export class CityPipe implements PipeTransform {

  transform(value: string, format: string): Observable<string> {
    let short: string;
    let long: string;

    switch(value) {
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz Thalerhof';
        break;
      case 'Hamburg':
        short = 'HAM';
        long = 'Airport Hamburg Fulsbüttel Helmut Schmidt';
        break;
      case 'Wien':
        short = 'VIE';
        long = 'Flughafen Wien Schwechat';
        break;
      default:
        long = short = value;
    }

    if (format === 'short') {
      return of(short).pipe(delay(3000));
    }

    return of(long);
  }
}
