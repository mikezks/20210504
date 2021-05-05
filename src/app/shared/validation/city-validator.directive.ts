import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: 'input[city]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CityValidatorDirective,
    multi: true
  }]
})
export class CityValidatorDirective implements Validator {
  @Input() city: string[];

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const allowList: string[] = this.city; /* [
      'Graz', 'Hamburg', 'Frankfurt'
    ]; */

    if (control?.value && allowList.indexOf(control.value) === -1) {
      return {
        city: {
          currentCity: control.value,
          allowedCities: allowList.join(', ')
        }
      };
    }

    return null;
  }

}
