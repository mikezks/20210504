import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { delay, find, map } from 'rxjs/operators';
import { FlightService } from 'src/app/flight-booking/services/flight.service';

@Directive({
  selector: 'input[asyncCity]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: AsyncCityValidatorDirective,
    multi: true
  }]
})
export class AsyncCityValidatorDirective implements AsyncValidator {

  constructor(private flightService: FlightService) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.flightService
      .find(control.value, '').pipe(
        map(flights => flights.length > 0 ? null : {
          asyncCity: true
        }),
        // delay(1000)
      );
  }
}
