import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { FormValidationsService } from 'src/app/core/forms/form-validations.service';

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

  constructor(formBuilder: FormBuilder,fvs:FormValidationsService) {
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
    const errors = this.form.errors;
    if (!errors) return '';
    if (errors['compareDates']) return errors['compareDates'];
    return;
  }

  public hasError(controlName: string): boolean {
    const control = this.getControl(controlName);
    if (!control) return false;
    return control.invalid;
  }

  public mustShowMessage(controlName: string): boolean {
    const control = this.getControl(controlName);
    if (!control) return false;
    return control.touched && control.invalid;
  }

  public getErrorMessage(controlName: string): string {
    const control = this.getControl(controlName);
    if (!control) return '';
    if (!control.errors) return '';
    const errors = control.errors;
    let errorMessage = '';
    errorMessage += errors['required'] ? '🔥 Field is required ' : ' ';
    errorMessage += errors['minlength'] ? `🔥 More than ${errors['minlength'].requiredLength} chars`: ' ';
    errorMessage += errors['maxlength'] ? `🔥 More than ${errors['maxlength'].requiredLength} chars`: ' ';
    errorMessage += errors['max'] ? `🔥 More than ${errors['max'].max} `: ' ';
    errorMessage += errors['min'] ? `🔥 Less than ${errors['min'].min} `: ' ';
    return errorMessage;
  }

  public onSubmitClick(){
    const {agency, destination, places, start_date, end_date, flightPrice} = this.form.value;
    const id = this.getDashId(agency + "-" + destination);
    const newTripData = {id, agency, destination, places, start_date, end_date, flightPrice};
    console.warn('Send trip data ', newTripData)
  }

  private getDashId(str: string):string {
    return str.toLocaleLowerCase().replace(/ /g, '-');
  }

  private getControl(controlName: string): AbstractControl | null {
    return this.form.get(controlName);
  }

  ngOnInit(): void {
  }

}
