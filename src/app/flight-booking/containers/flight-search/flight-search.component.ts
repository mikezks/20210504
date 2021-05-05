import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit, Optional } from '@angular/core';
import { of, Subscription, timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { Flight } from '../../../entities/flight';
import { FlightService } from '../../services/flight.service';

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
export class FlightSearchComponent implements OnInit, OnDestroy {

  from = 'Hamburg';
  to = 'Graz';
  //flights: Array<Flight> = [];
  selectedFlight: Flight;
  get flights() {
    return this.flightService.flights;
  }
  subscription: Subscription;

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    // this.subscription = timer(0, 1000).subscribe(console.log);
  }

  search(): void {
    // console.log(`My first flight search from ${ this.from } to ${ this.to }...`);
    if (this.flightService) {
      this.flightService
        .find(this.from, this.to).pipe(
          take(1)
        )
        .subscribe({
          // next: flights => this.flights = flights,
          error: err => console.error('My custom error', err)
        });
    }
  }

  select(flight: Flight): void {
    this.selectedFlight = flight;
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
