import { AbstractControl, FormGroup } from "@angular/forms";
import { FormMessagesService } from "./form-messages.service";

export class FormBase  {
  public form!: FormGroup;


  constructor(public fms:FormMessagesService){}

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

}
