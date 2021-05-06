import { CommonModule } from '@angular/common';
import { Component, Directive, EventEmitter, Input, Output, Pipe } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { Flight } from 'src/app/entities/flight';
import { FlightService } from '../../services/flight.service';

import { FlightSearchComponent } from './flight-search.component';

describe('Unit test with service mock: flight-search.component', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;
  const result = [
    { id: 17, from: 'Graz', to: 'Hamburg', date: 'now', delayed: true },
    { id: 18, from: 'Vienna', to: 'Barcelona', date: 'now', delayed: true },
    { id: 19, from: 'Frankfurt', to: 'Salzburg', date: 'now', delayed: true }
  ];

  const flightServiceMock = {
    flights: [],
    find: () => of(result)
  };

  @Component({ selector: 'app-flight-card', template: '' })
  class FlightCardComponent {
    @Input() item: Flight;
    @Input() selected: boolean;
    @Output() selectedChange = new EventEmitter();
  }

  // tslint:disable-next-line: directive-selector
  @Directive({ selector: 'input[city]' })
  class CityValidatorDirective {
    @Input() city: string[];
    validate = _ => null;
  }

  // tslint:disable-next-line: use-pipe-transform-interface
  @Pipe({ name: 'city' })
  class CityPipe {
    transform = v => v;
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule
      ],
      declarations: [
        FlightSearchComponent,
        FlightCardComponent,
        CityValidatorDirective,
        CityPipe
      ]
    })
    .overrideComponent(FlightSearchComponent, {
      set: {
        providers: [
          { provide: FlightService, useValue: flightServiceMock }
        ]
      }
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not load flights w/o from and to', () => {
    component.from = '';
    component.to = '';
    component.search();

    expect(component.flights.length).toBe(0);
  });
});
