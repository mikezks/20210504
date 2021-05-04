import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit, Optional } from '@angular/core';
import { of } from 'rxjs';
import { Flight } from '../entities/flight';
import { FlightService } from './flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  /* providers: [
    {
      provide: FlightService,
      useValue : {
        find: () => of([{
          id: 345,
          from: 'London',
          to: 'New York',
          date: new Date()
        }])
      }
    }
  ] */
})
export class FlightSearchComponent implements OnInit {

  from = 'Hamburg';
  to = 'Graz';
  //flights: Array<Flight> = [];
  selectedFlight: Flight;
  get flights() {
    return this.flightService.flights;
  }

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
  }

  search(): void {
    // console.log(`My first flight search from ${ this.from } to ${ this.to }...`);
    if (this.flightService) {
      this.flightService
        .find(this.from, this.to)
        .subscribe({
          // next: flights => this.flights = flights,
          error: err => console.error('My custom error', err)
        });
    }
  }

  select(flight: Flight): void {
    this.selectedFlight = flight;
  }
}
