import { Routes } from "@angular/router";
import { HomeComponent } from "./core/home/home.component";
import { FlightEditComponent } from "./flight-booking/containers/flight-edit/flight-edit.component";
import { FlightSearchComponent } from "./flight-booking/containers/flight-search/flight-search.component";

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'flight-search',
    component: FlightSearchComponent
  },
  {
    path: 'flight-edit',
    component: FlightEditComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
