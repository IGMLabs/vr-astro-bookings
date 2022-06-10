import { Injectable } from '@angular/core';
import { Trip } from './trip.interface';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TripsApi {
  private url = environment.apiUrl + 'trips/';
  constructor(private http: HttpClient){}

  public getAll$(): Observable<Trip[]>{
    return this.http.get<Trip[]>("http://localhost:3000/trips");
  }

  public getById(id: string){
    return this.http.get<Trip>("http://localhost:3000/trips/" + id);
  }

  public post(trip: Trip) {
    return this.http.post("http://localhost:3000/trips", trip);
  }
}
