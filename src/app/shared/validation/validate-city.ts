import { AbstractControl, ValidationErrors } from "@angular/forms";

export function validateCity(control: AbstractControl): ValidationErrors | null {
  const allowList: string[] = [
    'Graz', 'Hamburg', 'Frankfurt'
  ];

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
