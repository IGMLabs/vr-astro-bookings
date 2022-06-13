import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewBookingRoutingModule } from './new-booking-routing.module';
import { NewBookingPage } from './new-booking.page';
import { NewBookingForm } from './new-booking.form';


@NgModule({
  declarations: [
    NewBookingPage,
    NewBookingForm
  ],
  imports: [
    CommonModule,
    NewBookingRoutingModule
  ]
})
export class NewBookingModule { }
