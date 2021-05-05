import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Flight } from 'src/app/entities/flight';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  constructor(private http: HttpClient) { }

  find(city: string, long = true): Observable<string> {
    const baseUrl = 'http://www.angular.at/api/airport/';
    const url = baseUrl + (long ? 'fullName' : 'code');

    const params = new HttpParams()
      .set('name', city);

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.get<string>(url, { params, headers});
  }
}
