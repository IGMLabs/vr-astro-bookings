import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/core/api/booking.interface';
import { BookingsApi } from 'src/app/core/api/bookings.api';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.css']
})
export class BookingPage {

public bookingId: string;
public booking$: Observable<Booking>;

constructor(route:ActivatedRoute, bookingsApi:BookingsApi) {
  this.bookingId=route.snapshot.paramMap.get('id')||'';
  this.booking$=bookingsApi.getById$(this.bookingId);
 }

}
