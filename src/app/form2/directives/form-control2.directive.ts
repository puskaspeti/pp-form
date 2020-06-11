import { Directive, forwardRef, Inject, Input, Optional, Self } from '@angular/core';
import {
  AsyncValidator, AsyncValidatorFn, ControlValueAccessor, FormControl, FormControlDirective,
  NgControl, NG_ASYNC_VALIDATORS, NG_VALIDATORS,
  NG_VALUE_ACCESSOR, Validator, ValidatorFn
} from '@angular/forms';
import { ControlValueAccessor2 } from '../models/control-value-accessor2';

export const formControlBinding: any = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControl2Directive)
};

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[formControl]',
  providers: [formControlBinding],
  exportAs: 'ngForm'
})
export class FormControl2Directive<TControl extends FormControl = FormControl> extends FormControlDirective {

  @Input('formControl') set formControl(val: TControl) {
    this.form = val;
  }

  constructor(
    @Optional() @Self() @Inject(NG_VALIDATORS) validators: Array<Validator|ValidatorFn>,
    @Optional() @Self() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<AsyncValidator|AsyncValidatorFn>,
    @Optional() @Self() @Inject(NG_VALUE_ACCESSOR) valueAccessors: ControlValueAccessor[]) {
      super(validators, asyncValidators, valueAccessors, null);
      this.setNgControlToControlValueAccessor();
  }

  setNgControlToControlValueAccessor() {
    if (this.valueAccessor instanceof ControlValueAccessor2) {
      this.valueAccessor.ngControl = this;
    }
  }
}
