import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Flight } from '../entities/flight';
import { FlightService } from './flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from = 'Hamburg';
  to = 'Graz';
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
  }

  search(): void {
    // console.log(`My first flight search from ${ this.from } to ${ this.to }...`);

    this.flightService
      .find(this.from, this.to)
      .subscribe({
        next: flights => this.flights = flights,
        error: err => console.error('My custom error', err)
      });
  }

  select(flight: Flight): void {
    this.selectedFlight = flight;
  }
}
