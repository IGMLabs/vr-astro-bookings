import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.form.html',
  styleUrls: ['./login.form.css']
})
export class LoginForm implements OnInit {
  public form : FormGroup

  constructor(formBuilder:FormBuilder) {
    this.form=formBuilder.group({
      email:new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
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
    const control = this.getControl(ControlName);

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

  public getPasswordMatchMessage(){
    const errors = this.form.errors;
    if(!errors) return ''
    if(errors['passwordMatch']) return ['passwordMatch']
    return ''
  }

  public getControl(ControlName :string): AbstractControl | null{
    return this.form.get(ControlName);
  }

  public onSave(){
    const  { email, password} = this.form.value;
    const register = { email, password};
    console.warn('Send contact message', register);
  }
}
