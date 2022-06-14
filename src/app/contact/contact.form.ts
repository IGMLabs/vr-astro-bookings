import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormMessagesService } from '../core/forms/form-messages.service';
import { FormBase } from '../core/forms/form.base';

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
export class ContactForm extends FormBase implements OnInit {

  // public override form : FormGroup

  constructor(formBuilder:FormBuilder,  fms:FormMessagesService) {
    super(fms);
    this.form=formBuilder.group({
      name:new FormControl('',[Validators.required, Validators.minLength(2)]),
      email:new FormControl(''),
      message:new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(50)])
    })
   }

  ngOnInit(): void {
  }

  public onSave(){
    const  contactOriginal = this.form.value;
    console.warn('Send contact message', contactOriginal);
    const contactApi = {...contactOriginal, email: contactOriginal.email.email};
    console.warn('Send contact message', contactApi);
  }
}
