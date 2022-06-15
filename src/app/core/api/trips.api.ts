import { Injectable } from '@angular/core';
import { Trip } from './trip.interface';
import { HttpClient } from "@angular/common/http";
import { CrudApi } from './crud';
import { StatusStore } from './status.store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TripsApi extends CrudApi<Trip> {
  constructor(http: HttpClient,statusStore: StatusStore) {
    super(http, 'trips', statusStore);
  }

  // public getByText$(text : string |null) : Observable<Trip[]>{
  //   if (text ===  null || text == '') return this.getAll$();
  //   return this.http.get<Trip[]>(this.url + '?q=' +text);
  // }

}
