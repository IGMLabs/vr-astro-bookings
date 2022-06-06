import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(formBuilder:FormBuilder) {
    this.form=formBuilder.group({
      name:new FormControl('',[Validators.required, Validators.minLength(2)]),
      email:new FormControl('',[Validators.required, Validators.email]),
      message:new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(50)])
    })
   }

  ngOnInit(): void {
  }

  public mustShowMessage (controlName :string) : boolean {
    const control = this.getControl(controlName);
    if(!control) return false
    return control.invalid && control.touched;
  }

  public hasError(ControlName :string): boolean{
    const control = this.getControl('name');

    if(!control) return false
    return control.invalid;

  }

  public getErrorMessage(controlName: string) :string {
    const control = this.getControl(controlName);
    if (!control) return '';
    if (!control.errors) return '';
    const errors = control.errors;
    let errorMessage = '';
    errorMessage += errors['required'] ? '🔥 Field is required' : '';
    errorMessage += errors['email'] ? '🔥 Should be an email' : '';
    errorMessage += errors['minlength'] ? `🔥 More than ${errors["minlength"].requiredLength} chars` : '';
    errorMessage += errors['maxlength'] ? `🔥 Less than ${errors["maxlength"].requiredLength} chars` : '';
    return errorMessage;

  }

  public getControl(ControlName :string): AbstractControl | null{
    return this.form.get(ControlName);
  }

  public onSave(){
    const  contact = this.form.value;
    console.warn('Send contact message', contact);
  }
}
