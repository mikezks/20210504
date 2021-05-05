import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { AirportService } from '../../flight-booking/services/airport.service';

@Pipe({
  name: 'asyncCity',
  pure: true
})
export class AsyncCityPipe implements PipeTransform {

  constructor(private airportService: AirportService) {
  }

  transform(value: string, format: string): Observable<string> {
    return this.airportService.find(value, format !== 'short');
  }
}
