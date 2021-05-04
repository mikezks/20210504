import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from '../entities/flight';

@Injectable()
export class DummyFlightService {

  find(from: string, to: string): Observable<Flight[]> {
    return of([
      { id: 999, from: 'Madrid', to: 'Rome', date: '', delayed: true }
    ]);
  }
}
