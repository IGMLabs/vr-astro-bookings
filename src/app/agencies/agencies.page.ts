import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { catchError, map, Observable, Subject, switchMap, concatMap, exhaustMap,mergeMap, BehaviorSubject } from 'rxjs';
import { AgenciesApi } from '../core/api/agencies.api';
import { Agency } from '../core/api/agency.interface';
import { Trip } from '../core/api/trip.interface';
import { TripsApi } from '../core/api/trips.api';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.page.html',
  styleUrls: ['./agencies.page.css']
})
export class AgenciesPage implements OnInit {
  // public agencies! :Agency[];

  public agencies$ : Observable<Agency[]>;
  public trips$! : Observable<Trip[]>;

  private search$ : BehaviorSubject<string> = new BehaviorSubject('');


  public error : boolean = false;

  constructor(private agenciesApi : AgenciesApi, private route :ActivatedRoute, private tripsApi :TripsApi) {
    // agenciesApi.getAll$().subscribe(this.subscriptor);
    // this.search$.subscribe((searchTerm) => (this.agencies$ = this.agenciesApi.getByText$(searchTerm)) );
    // this.agencies$ = this.agenciesApi.getAll$();


    this.agencies$ =this.search$.pipe(

      switchMap((searchTerm)=> this.agenciesApi.getByText$(searchTerm))
      //concatMap((searchTerm)=> this.agenciesApi.getByText$(searchTerm))
      //exhaustMap((searchTerm)=> this.agenciesApi.getByText$(searchTerm))
      //mergeMap((searchTerm)=> this.agenciesApi.getByText$(searchTerm))
      //map(searchTerm => this.agenciesApi.getByText$(searchTerm))
      );

      // const q = this.route.snapshot.queryParamMap.get('q');
      // console.log(q);

      // this.route.queryParamMap.subscribe((queryParamMap) => {
      //   const q = queryParamMap.get('q');
      //   this.trips$ = this.tripsApi.getByText$(q);
      //   console.log(q);
      // } );

      this.trips$ = this.route.queryParamMap.pipe(
                                                  map((qpm) => qpm.get('q')),
                                                  switchMap((agencyId) => this.tripsApi.getByText$(agencyId))
      )


   }

  ngOnInit(): void {
  }


  onReload(){
  this.search$.next('');
  }

  onSearch (searchTerms:string){
    console.log('funciona')
    this.search$.next(searchTerms);
  }
}

