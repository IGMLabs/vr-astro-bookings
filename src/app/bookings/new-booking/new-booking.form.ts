import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Booking } from 'src/app/core/api/booking.interface';
import { BookingsApi } from 'src/app/core/api/bookings.api';
import { Trip } from 'src/app/core/api/trip.interface';
import { TripsApi } from 'src/app/core/api/trips.api';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';
import { FormBase } from 'src/app/core/forms/form.base';
import { TransformationsService } from 'src/app/core/utils/transformations.service';

@Component({
  selector: 'app-new-booking-form',
  templateUrl: './new-booking.form.html',
  styleUrls: ['./new-booking.form.css']
})
export class NewBookingForm extends FormBase implements OnInit {
  public hasPremiumFood : boolean = false

  @Input() public trips : Trip [] =[];
  @Output() public save =  new EventEmitter<Booking>();
  constructor(formBuilder: FormBuilder, fms: FormMessagesService, public trans: TransformationsService,private bookingsApi: BookingsApi,private tripsApi :TripsApi) {
    super(fms);

    this.form = formBuilder.group({
        tripId: new FormControl('', [Validators.required]),
        passengerName: new FormControl(),
        date: new FormControl('', [Validators.required]),
        luggageKilos: new FormControl('', [Validators.required]),
    });
    this.tripsApi.getAll$().subscribe((trips)=> this.trips = trips);
   }



   public onSubmitClick() {
    const { tripId, passengerName,date,luggageKilos,hasPremiumFoodPrice=this.hasPremiumFood} = this.form.value;
    const id = this.trans.getDashId(tripId+date+passengerName);
    const newBookingData = { id, tripId, passengerName, date, luggageKilos, hasPremiumFoodPrice};
    console.warn('Send booking data ', newBookingData);
    this.save.emit(newBookingData);
  }
  ngOnInit(): void {
  }

}
