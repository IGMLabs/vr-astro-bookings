import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Booking } from 'src/app/core/api/booking.interface';

@Component({
  selector: 'app-bookings-list',
  templateUrl: './bookings.list.html',
  styleUrls: ['./bookings.list.css']
})
export class BookingsList implements OnInit {
  @Input() public bookings :Booking[] =[];
  @Output() private reload = new EventEmitter();


  ngOnInit(): void {
  }
  public reloading = false;
  public getBookingsLength(){
    return this.bookings.length;
  }

  public onReloadClick( list : string){
    console.log('Reloading...' + list);
    this.reloading =true;
    this.reload.emit();
  }
}
