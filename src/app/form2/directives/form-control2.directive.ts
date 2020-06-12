import { Directive, forwardRef, Inject, Input, Optional, Self } from '@angular/core';
import {
  AsyncValidator, AsyncValidatorFn, ControlValueAccessor, FormControl, FormControlDirective,
  NgControl, NG_ASYNC_VALIDATORS, NG_VALIDATORS,
  NG_VALUE_ACCESSOR, Validator, ValidatorFn,
} from '@angular/forms';
import {setNgControlToControlValueAccessor} from './shared';

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

  @Input('formControl') set form(val: FormControl) {
    super.form = val;
  }

  constructor(
    @Optional() @Self() @Inject(NG_VALIDATORS) validators: Array<Validator|ValidatorFn>,
    @Optional() @Self() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<AsyncValidator|AsyncValidatorFn>,
    @Optional() @Self() @Inject(NG_VALUE_ACCESSOR) valueAccessors: ControlValueAccessor[]) {
      super(validators, asyncValidators, valueAccessors, null);
      setNgControlToControlValueAccessor(this, this.valueAccessor);
  }
}
