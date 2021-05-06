import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { defaultSort, SORT } from './shared/sorting/default-sort';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';


@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(APP_ROUTES),
      CoreModule,
      // FlightBookingModule // -> necessary for Lazy Loading
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
