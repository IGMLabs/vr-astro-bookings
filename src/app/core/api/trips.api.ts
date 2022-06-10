import { Injectable } from '@angular/core';
import { Trip } from './trip.interface';
import { HttpClient } from "@angular/common/http";
import { CrudApi } from './crud';

@Injectable({
  providedIn: 'root'
})

export class TripsApi extends CrudApi<Trip> {
  constructor(http: HttpClient) {
    super(http, 'trips');
  }
}
