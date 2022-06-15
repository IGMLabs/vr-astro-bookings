import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { Trip } from '../core/api/trip.interface';
import { TripsApi } from '../core/api/trips.api';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.css']
})
export class TripsPage implements OnInit {

  public trips!: Trip[];
  public trips$ : Observable<Trip[]>;

  private search$ : BehaviorSubject<string> = new BehaviorSubject('');

  public error : boolean = false;

  constructor(private tripsApi : TripsApi) {
    // agenciesApi.getAll$().subscribe(this.subscriptor);
    // this.search$.subscribe((searchTerm) => (this.agencies$ = this.agenciesApi.getByText$(searchTerm)) );
    this.trips$ = this.tripsApi.getAll$();
    this.trips$ =this.search$.pipe(

      switchMap((searchTerm)=> this.tripsApi.getByText$(searchTerm))
      //concatMap((searchTerm)=> this.agenciesApi.getByText$(searchTerm))
      //exhaustMap((searchTerm)=> this.agenciesApi.getByText$(searchTerm))
      //mergeMap((searchTerm)=> this.agenciesApi.getByText$(searchTerm))
      //map(searchTerm => this.agenciesApi.getByText$(searchTerm))
      )
   }

  ngOnInit(): void {
  }

  onReload() {
    this.search$.next('');
  }

  onSearch (searchTerms:string){
    console.log('funciona')
    this.search$.next(searchTerms);
  }

}
