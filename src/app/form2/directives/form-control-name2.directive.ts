import { Directive, forwardRef, Optional, Host, SkipSelf, Self, Inject, Input } from '@angular/core';
import { NgControl, ControlContainer, NG_VALIDATORS, Validator, ValidatorFn,
  NG_ASYNC_VALIDATORS, AsyncValidator, AsyncValidatorFn,
  NG_VALUE_ACCESSOR, ControlValueAccessor, FormControlName } from '@angular/forms';
import {setNgControlToControlValueAccessor} from './shared';

export const controlNameBinding: any = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlName2Directive)
};

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[formControlName]',
  providers: [controlNameBinding],
})
export class FormControlName2Directive extends FormControlName {

  @Input('formControlName') set formControlName2(val: string | number | null) {
    this.name = val;
  }

  constructor(
    @Optional() @Host() @SkipSelf() parent: ControlContainer,
    @Optional() @Self() @Inject(NG_VALIDATORS) validators: Array<Validator|ValidatorFn>,
    @Optional() @Self() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<AsyncValidator|AsyncValidatorFn>,
    @Optional() @Self() @Inject(NG_VALUE_ACCESSOR) valueAccessors: ControlValueAccessor[]) {
      super(parent, validators, asyncValidators, valueAccessors, null);
      setNgControlToControlValueAccessor(this, this.valueAccessor);
  }
}
