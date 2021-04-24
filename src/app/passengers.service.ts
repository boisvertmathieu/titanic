import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Passenger } from './interfaces/passenger';

@Injectable({
  providedIn: 'root',
})
export class PassengersService {
  apiResponse: Passenger[] | string[];

  constructor(private http: HttpClient) {}

  getPassengers(): Observable<Passenger[] | string[]> {
    return this.http
      .get<Passenger[] | string[]>(environment.databaseBaseUrl + 'passengers')
      .pipe(
        map((response: Passenger[] | string[]) => {
          if ('error' in response) {
            this.apiResponse = response;
            console.log(this.apiResponse['error']);
            return response;
          } else {
            this.apiResponse = response;
            return response;
          }
        })
      );
  }
}
