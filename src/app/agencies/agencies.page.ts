import { Component, Input, OnInit } from '@angular/core';
import { catchError, map, Observable, Subject, switchMap, concatMap, exhaustMap,mergeMap } from 'rxjs';
import { AgenciesApi } from '../core/api/agencies.api';
import { Agency } from '../core/api/agency.interface';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.page.html',
  styleUrls: ['./agencies.page.css']
})
export class AgenciesPage implements OnInit {
   public agencies! :Agency[];

  public agencies$ : Observable<Agency[]>;

  private search$ : Subject<string> = new Subject();

  public error : boolean = false;

  constructor(private agenciesApi : AgenciesApi) {
    // agenciesApi.getAll$().subscribe(this.subscriptor);
    this.search$.subscribe((searchTerm) => (this.agencies$ = this.agenciesApi.getByText$(searchTerm)) );
    this.agencies$ = this.agenciesApi.getAll$();
    this.agencies$ =this.search$.pipe(

      switchMap((searchTerm)=> this.agenciesApi.getByText$(searchTerm))
      //concatMap((searchTerm)=> this.agenciesApi.getByText$(searchTerm))
      //exhaustMap((searchTerm)=> this.agenciesApi.getByText$(searchTerm))
      //mergeMap((searchTerm)=> this.agenciesApi.getByText$(searchTerm))
      //map(searchTerm => this.agenciesApi.getByText$(searchTerm))
      )
   }

  ngOnInit(): void {
  }


  onReload(){
    this.agenciesApi.getAll$().subscribe((data)=> {
      // this.agencies = data;
    },
    (err)=>{
      console.log("hay un fallo");
      this.error= true;
    });
  }

  onSearch (searchTerms:string){
    this.search$.next(searchTerms);
    //this.agencies$ = this.agenciesApi.getByText$(searchTerms);
  }
}

