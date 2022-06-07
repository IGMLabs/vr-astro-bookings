import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormMessagesService } from '../core/forms/form-messages.service';

interface Contact{
  name: string;
  email :string;
  message :string;
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact.form.html',
  styleUrls: ['./contact.form.css']
})
export class ContactForm implements OnInit {

  public form : FormGroup

  constructor(formBuilder:FormBuilder, public fms:FormMessagesService) {
    this.form=formBuilder.group({
      name:new FormControl('',[Validators.required, Validators.minLength(2)]),
      email:new FormControl('',[Validators.required, Validators.email]),
      message:new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(50)])
    })
   }

  ngOnInit(): void {
  }

  public mustShowMessage (controlName :string) : boolean {
    return this.fms.mustShowMessage(this.form, controlName);
  }

  public hasError( controlName :string): boolean{
    return this.fms.hasError(this.form, controlName);
  }

  public getErrorMessage(controlName: string) :string {
    return this.fms.getErrorMessageRegister(this.form, controlName);

  }

  public getControl(ControlName :string): AbstractControl | null{
    return this.form.get(ControlName);
  }

  public onSave(){
    const  contact = this.form.value;
    console.warn('Send contact message', contact);
  }
}
