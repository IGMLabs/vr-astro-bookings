import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';
import { FormBase } from 'src/app/core/forms/form.base';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.form.html',
  styleUrls: ['./login.form.css']
})
export class LoginForm extends FormBase implements OnInit {

  constructor(formBuilder:FormBuilder,  fms : FormMessagesService) {
    super(fms);
    this.form=formBuilder.group({
      email:new FormControl(''),
      password:new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    })
   }

  ngOnInit(): void {
  }

  public getPasswordMatchMessage(){
    return this.fms.getPasswordMatchMessage(this.form);
  }


  public onSave(){
    const  { email, password} = this.form.value;
    const register = { email, password};
    console.warn('Send contact message', register);
  }
}
