import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AgenciesApi } from 'src/app/core/api/agencies.api';
import { Agency } from 'src/app/core/api/agency.interface';
import { Trip } from 'src/app/core/api/trip.interface';
import { TripsApi } from 'src/app/core/api/trips.api';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';
import { FormValidationsService } from 'src/app/core/forms/form-validations.service';
import { FormBase } from 'src/app/core/forms/form.base';
import { TransformationsService } from 'src/app/core/utils/transformations.service';

@Component({
  selector: 'app-new-trip-form',
  templateUrl: './new-trip.form.html',
  styleUrls: ['./new-trip.form.css']
})
export class NewTripForm extends FormBase implements OnInit {
  public start_date = 0;
  @Input() public agencies: Agency[] = [];
  @Output() public save = new EventEmitter<Trip>();


  constructor(formBuilder: FormBuilder,fvs:FormValidationsService,
    fms:FormMessagesService, public trans:TransformationsService,  agenciesApi : AgenciesApi, private tripsApi : TripsApi) {
    super(fms);
    this.agencies = agenciesApi.getAll();
    this.form = formBuilder.group({
      agencyId: new FormControl('', [Validators.required]),
      destination: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)] ),
      places: new FormControl('', [Validators.required, Validators.min(2), Validators.max(10)] ),
      startDate: new FormControl('', [Validators.required] ),
      endDate: new FormControl('', [Validators.required] ),
      flightPrice: new FormControl('', [Validators.required, Validators.min(1000000), Validators.max(10000000)] ),

    }, {
      validators: [fvs.compareDates]
    });
  }


  public getDatesMessage() {
    return this.fms.getDatesMessage(this.form);
  }

  public onSubmitClick(){
    const {agencyId, destination, places, startDate, endDate, flightPrice} = this.form.value;
    const id = this.trans.getDashId(agencyId + "-" + destination);
    const newTripData = {id, agencyId, destination, places, startDate, endDate, flightPrice};
    console.warn('Send trip data ', newTripData);
    this.save.emit(newTripData);
  }

  ngOnInit(): void {
  }

}
