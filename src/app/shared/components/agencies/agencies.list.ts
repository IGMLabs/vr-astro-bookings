import { Component, OnInit } from '@angular/core';
import { AgenciesApi } from 'src/app/core/api/agencies.api';
import { Agency } from 'src/app/core/api/agency.interface';

@Component({
  selector: 'app-agencies-list',
  templateUrl: './agencies.list.html',
  styleUrls: ['./agencies.list.css']
})
export class AgenciesList implements OnInit {

  public agencies: Agency[];

  constructor(agenciesApi : AgenciesApi) {
    this.agencies = agenciesApi.getAll();
   }

  ngOnInit(): void {
  }

  public reloading = false;
  public getAgenciesLength(){
    return this.agencies.length;
  }

  public reload( list : string){
    console.log('Reloading...' + list);
    this.reloading =true;
  }
}
