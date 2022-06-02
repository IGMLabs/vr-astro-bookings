import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agencies-list',
  templateUrl: './agencies.list.html',
  styleUrls: ['./agencies.list.css']
})
export class AgenciesList implements OnInit {

  public agencies = [
    {
      id: 'space-y',
      name: 'Space Y',
      range: 'Interplanetary',
      status: 'Active',
    },
    {
      id: 'green-origin',
      name: 'Green Origin',
      range: 'Orbital',
      status: 'Active',
    },
    {
      id: 'virgin-way',
      name: 'Virgin Way',
      range: 'Orbital',
      status: 'Pending',
    },
  ];

  constructor() { }

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
