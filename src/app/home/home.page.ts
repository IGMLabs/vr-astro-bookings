import { Component, OnInit } from '@angular/core';
import { AgenciesApi } from '../core/api/agencies.api';
import { Agency } from '../core/api/agency.interface';
import { Trip } from '../core/api/trip.interface';
import { TripsApi } from '../core/api/trips.api';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {
    public reloading = false;

    public trips!: Trip[];
  public agencies!: Agency[];

  constructor(tripsApi: TripsApi, agenciesApi: AgenciesApi) {
    this.trips = tripsApi.getAll();
    agenciesApi.getAll().subscribe((data)=>{this.agencies=data});
   }

  ngOnInit(): void {
  }



}

