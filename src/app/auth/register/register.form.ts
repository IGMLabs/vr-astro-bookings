import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';
import { FormValidationsService } from 'src/app/core/forms/form-validations.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register.form.html',
  styleUrls: ['./register.form.css']
})
export class RegisterForm implements OnInit {
  public form : FormGroup

  constructor(formBuilder:FormBuilder, fvs:FormValidationsService, public fms:FormMessagesService) {
    this.form=formBuilder.group({
      name:new FormControl('',[Validators.required, Validators.minLength(2)]),
      email:new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      confirmPassword:new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      acceptTerms : new FormControl(false,[Validators.requiredTrue])
    },{
      validators: [fvs.passwordMatch],
    })
   }



  ngOnInit(): void {
  }

  public mustShowMessage (controlName :string) : boolean {
    return this.fms.mustShowMessage(this.form, controlName);
  }

  public hasError(ControlName :string): boolean{
    return this.fms.hasError(this.form, ControlName);

  }

  public getErrorMessage(controlName: string) :string {
    return this.fms.getErrorMessageRegister(this.form, controlName);

  }

  public getPasswordMatchMessage(){
    return this.fms.getPasswordMatchMessage(this.form);
  }

  public getControl(ControlName :string): AbstractControl | null{
    return this.form.get(ControlName);
  }

  public onSave(){
    const  {name, email, password} = this.form.value;
    const register = {name, email, password};
    console.warn('Send contact message', register);
  }

}
