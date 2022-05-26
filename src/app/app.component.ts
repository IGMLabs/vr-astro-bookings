import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Astro Bookings';
  public  subtitle = "Welcome on board";
  public author = "Vicente Rodriguez";
  public authorURL = "https://www.google.com";
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
  public reloading = false;
  public getAgenciesLength(){
    return this.agencies.length;
  }

  public reload( list : string){
    console.log('Reloading...' + list);
    this.reloading =true;
  }
}
