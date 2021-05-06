import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightEditComponent } from './containers/flight-edit/flight-edit.component';
import { FlightSearchComponent } from './containers/flight-search/flight-search.component';

const routes: Routes = [
  {
    path: 'flight-booking',
    children: [
      {
        path: '',
        redirectTo: 'flight-search',
        pathMatch: 'full'
      },
      {
        path: 'flight-search',
        component: FlightSearchComponent
      },
      {
        path: 'flight-edit',
        component: FlightEditComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightBookingRoutingModule { }
