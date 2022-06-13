import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../core/api/booking.interface';
import { BookingsApi } from '../core/api/bookings.api';

@Component({
  selector: 'app-bookings-page',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.css']
})
export class BookingsPage implements OnInit {

  ngOnInit(): void {
  }
  public bookings$ : Observable<Booking[]>;

  public error : boolean = false;

  constructor(private bookingsApi : BookingsApi) {
    // agenciesApi.getAll$().subscribe(this.subscriptor);
    this.bookings$ = this.bookingsApi.getAll$();
   }

  onReload(){
    this.bookingsApi.getAll$().subscribe((data)=> {
      // this.agencies = data;
    },
    (err)=>{
      console.log("hay un fallo");
      this.error= true;
    });
  }
}
