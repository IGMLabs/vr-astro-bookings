import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trip } from 'src/app/core/api/trip.interface';
import { TripsApi } from 'src/app/core/api/trips.api';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.page.html',
  styleUrls: ['./trip.page.css']
})
export class TripPage implements OnInit {
  public tripId : string;
  public trip?: Trip ;



  constructor(route: ActivatedRoute, tripsApi: TripsApi) {
    this.tripId = route.snapshot.paramMap.get('id') || '';
    tripsApi.getById$(this.tripId).subscribe((data)=>{
      this.trip= data;
    });
  }

  ngOnInit(): void {
  }

}
