import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipes/city.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncCityPipe } from './pipes/async-city.pipe';
import { CityValidatorDirective } from './validation/city-validator.directive';
import { AsyncCityValidatorDirective } from './validation/async-city-validator.directive';


@NgModule({
  declarations: [
    CityPipe,
    AsyncCityPipe,
    CityValidatorDirective,
    AsyncCityValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AsyncCityPipe,
    CityPipe,
    FormsModule,
    ReactiveFormsModule,
    CityValidatorDirective,
    AsyncCityValidatorDirective
  ]
})
export class SharedModule { }
