import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';
import { FormValidationsService } from 'src/app/core/forms/form-validations.service';
import { FormBase } from 'src/app/core/forms/form.base';
import { Register } from '../api/register.interface';

@Component({
  selector: 'app-register-form',
  templateUrl: './register.form.html',
  styleUrls: ['./register.form.css']
})
export class RegisterForm extends FormBase implements OnInit {

  @Output() register = new EventEmitter<Register>();

  constructor(formBuilder:FormBuilder, fvs:FormValidationsService, fms:FormMessagesService) {
    super(fms);
    this.form=formBuilder.group({

      name:new FormControl('',[Validators.required, Validators.minLength(2)]),
      email:new FormControl(''),
      password:new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      confirmPassword:new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      acceptTerms : new FormControl(false,[Validators.required])
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
    const { name, email, password } = this.form.value;
    const register: Register = { name, email: email.email, password };
    console.warn('Send register', register);
    this.register.emit(register);
  }

}
