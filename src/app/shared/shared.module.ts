import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipes/city.pipe';
import { FormsModule } from '@angular/forms';
import { AsyncCityPipe } from './pipes/async-city.pipe';
import { CityValidatorDirective } from './validation/city-validator.directive';


@NgModule({
  declarations: [
    CityPipe,
    AsyncCityPipe,
    CityValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AsyncCityPipe,
    CityPipe,
    FormsModule,
    CityValidatorDirective
  ]
})
export class SharedModule { }
