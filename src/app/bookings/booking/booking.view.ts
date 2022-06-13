import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/core/api/booking.interface';

@Component({
  selector: 'app-booking-view',
  templateUrl: './booking.view.html',
  styleUrls: ['./booking.view.css']
})
export class BookingView implements OnInit {

  public bookingId : string = ""
  public booking! : Booking

  constructor() { }

  ngOnInit(): void {
  }

}
