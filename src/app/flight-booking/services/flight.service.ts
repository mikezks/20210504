import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Flight } from '../../entities/flight';
import { DefaultFlightService } from './default-flight.service';
import { DummyFlightService } from './dummy-flight.service';

@Injectable({
  providedIn: 'root',
  useClass: DefaultFlightService,
  /* useFactory: (http: HttpClient) => {
    if (environment.flightService === 'dummy') {
      return new DummyFlightService();
    } else {
      return new DefaultFlightService(http);
    }
  }, */
  deps: [HttpClient]
})
export abstract class FlightService {
  flights: Flight[];
  abstract find(from: string, to: string): Observable<Flight[]>;
}
