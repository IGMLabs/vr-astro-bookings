import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';
import { FormValidationsService } from 'src/app/core/forms/form-validations.service';
import { TransformationsService } from 'src/app/core/utils/transformations.service';

@Component({
  selector: 'app-new-trip-form',
  templateUrl: './new-trip.form.html',
  styleUrls: ['./new-trip.form.css']
})
export class NewTripForm implements OnInit {
  public start_date = 0;
  public form: FormGroup;
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

  constructor(formBuilder: FormBuilder,fvs:FormValidationsService,public fms:FormMessagesService, public trans:TransformationsService) {
    this.form = formBuilder.group({
      agency: new FormControl('', [Validators.required]),
      destination: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)] ),
      places: new FormControl('', [Validators.required, Validators.min(2), Validators.max(10)] ),
      start_date: new FormControl('', [Validators.required] ),
      end_date: new FormControl('', [Validators.required] ),
      flightPrice: new FormControl('', [Validators.required, Validators.min(1000000), Validators.max(10000000)] ),

    }, {
      validators: [fvs.compareDates]
    });
  }


  public getDatesMessage() {
    return this.fms.getDatesMessage(this.form);
  }

  public hasError(controlName: string): boolean {
    return this.fms.hasError(this.form, controlName);
  }

  public mustShowMessage(controlName: string): boolean {
    return this.fms.mustShowMessage(this.form, controlName);
  }


  public getErrorMessage(controlName: string): string {
    return this.fms.getErrorMessage(this.form, controlName);
  }

  public onSubmitClick(){
    const {agency, destination, places, start_date, end_date, flightPrice} = this.form.value;
    const id = this.trans.getDashId(agency + "-" + destination);
    const newTripData = {id, agency, destination, places, start_date, end_date, flightPrice};
    console.warn('Send trip data ', newTripData)
  }

  ngOnInit(): void {
  }

}
