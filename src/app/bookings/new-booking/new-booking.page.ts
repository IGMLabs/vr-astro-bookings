import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/core/api/booking.interface';
import { BookingsApi } from 'src/app/core/api/bookings.api';

@Component({
  selector: 'app-new-booking-page',
  templateUrl: './new-booking.page.html',
  styleUrls: ['./new-booking.page.css']
})
export class NewBookingPage implements OnInit {
  [x: string]: any;


  constructor(private bookingsApi :BookingsApi,private router: Router) { }

  ngOnInit(): void {
  }

  onSave(newBookingData :Booking) {
    this.bookingsApi.post$(newBookingData).subscribe(()=> {

      this.router.navigate(['/bookings']);
    });

  }

}
