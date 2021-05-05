import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipes/city.pipe';
import { FormsModule } from '@angular/forms';
import { AsyncCityPipe } from './pipes/async-city.pipe';


@NgModule({
  declarations: [
    CityPipe,
    AsyncCityPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AsyncCityPipe,
    CityPipe,
    FormsModule
  ]
})
export class SharedModule { }
