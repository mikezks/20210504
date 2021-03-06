import { Component, Inject, OnDestroy, OnInit, SkipSelf } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { defaultSort, SORT, SortFn } from '../../../shared/sorting/default-sort';
import { Flight } from '../../../entities/flight';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: [
    { provide: SORT, useValue: (a, b) => 0 }
  ]
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
  basket: Record<number, boolean> = {
    3: true,
    5: true
  };

  /* const dynForms = {
    formName: 'Personal data',
    fields: [
      {
        name: 'firstname',
        label: 'Firstname',
        type: 'textfield',
        validator: [
          'required',
          'custom-person-validator'
        ]
      }
    ]
  }; */

  constructor(
    private flightService: FlightService,
    @Inject(SORT) private sortFn: SortFn) { }

  ngOnInit(): void {
    // this.subscription = timer(0, 1000).subscribe(console.log);
  }

  sort(): void {
    this.flights.sort(this.sortFn);
  }

  search(): void {
    if (!this.from || !this.to) {
      return;
    }

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
