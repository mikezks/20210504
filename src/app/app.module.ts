import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { CoreModule } from './core/core.module';
import { defaultSort, SORT } from './shared/sorting/default-sort';


@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
      CoreModule,
      FlightBookingModule
   ],
   declarations: [
      AppComponent
   ],
   providers: [
     { provide: SORT, useValue: defaultSort }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
