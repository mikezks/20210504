import { Routes } from "@angular/router";
import { FlightEditComponent } from "./flight-booking/containers/flight-edit/flight-edit.component";
import { FlightSearchComponent } from "./flight-booking/containers/flight-search/flight-search.component";

export const APP_ROUTES: Routes = [
  {
    path: 'flight-search',
    component: FlightSearchComponent
  },
  {
    path: 'flight-edit',
    component: FlightEditComponent
  }
];
