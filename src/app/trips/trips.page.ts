import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Trip } from '../core/api/trip.interface';
import { TripsApi } from '../core/api/trips.api';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.css']
})
export class TripsPage implements OnInit {

  //public trips!: Trip[];
  public trips$ : Observable<Trip[]>;

  public error : boolean = false;

  constructor(private tripsApi: TripsApi) {
    this.trips$ = this.tripsApi.getAll$().pipe();
  }

  ngOnInit(): void {
  }

  onReload() {
    this.tripsApi.getAll$().subscribe((data)=> {
      // this.agencies = data;
    },
    (err)=>{
      console.log("hay un fallo");
      this.error= true;
    });
  }

}
