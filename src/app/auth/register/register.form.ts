import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';
import { FormValidationsService } from 'src/app/core/forms/form-validations.service';
import { FormBase } from 'src/app/core/forms/form.base';

@Component({
  selector: 'app-register-form',
  templateUrl: './register.form.html',
  styleUrls: ['./register.form.css']
})
export class RegisterForm extends FormBase implements OnInit {

  constructor(formBuilder:FormBuilder, fvs:FormValidationsService, fms:FormMessagesService) {
    super(fms);
    this.form=formBuilder.group({

      name:new FormControl('',[Validators.required, Validators.minLength(2)]),
      email:new FormControl(''),
      password:new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      confirmPassword:new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      acceptTerms : new FormControl(false,[Validators.requiredTrue])
    },{
      validators: [fvs.passwordMatch],
    })
   }

  ngOnInit(): void {
  }

  public getPasswordMatchMessage(){
    return this.fms.getPasswordMatchMessage(this.form);
  }


  public onSave(){
    const  {name, email, password} = this.form.value;
    const register = {name, email, password};
    console.warn('Send contact message', register);
  }

}
