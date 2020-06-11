import { Directive, EventEmitter, forwardRef, Host, Inject, Input, Optional, Output, Self } from '@angular/core';
import {
  AsyncValidator, AsyncValidatorFn,


  ControlContainer, ControlValueAccessor,
  NgControl,
  NgModel, NG_ASYNC_VALIDATORS, NG_VALIDATORS,
  NG_VALUE_ACCESSOR, Validator, ValidatorFn
} from '@angular/forms';
import { ControlValueAccessor2 } from '../models/control-value-accessor2';
import { FormControl2 } from '../models/form-control2';
import { FormControl2Options } from '../models/form-control2-options';

export const formControlBinding: any = {
  provide: NgControl,
  useExisting: forwardRef(() => NgModel2Directive)
};

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[ngModel2]',
  providers: [formControlBinding],
  exportAs: 'ngModel'
})
export class NgModel2Directive<TValue = unknown, TOptions extends FormControl2Options = FormControl2Options> extends NgModel {

  public readonly control = new FormControl2<TValue>();

  @Input('ngModel2') model: TValue;

  // tslint:disable-next-line: no-input-rename
  @Input('options') set controlOptions(val: TOptions) {
    this.control.options = val;
  }

  // tslint:disable-next-line: no-output-rename
  @Output('ngModel2Change') update = new EventEmitter<TValue>();

  constructor(
    @Optional() @Host() parent: ControlContainer,
    @Optional() @Self() @Inject(NG_VALIDATORS) validators: Array<Validator|ValidatorFn>,
    @Optional() @Self() @Inject(NG_ASYNC_VALIDATORS) asyncValidators:
        Array<AsyncValidator|AsyncValidatorFn>,
    @Optional() @Self() @Inject(NG_VALUE_ACCESSOR) valueAccessors: ControlValueAccessor[]) {
      super(parent, validators, asyncValidators, valueAccessors);
      this.setViewModelUpdateOnChange();
      this.setNgControlToControlValueAccessor();
  }

  setViewModelUpdateOnChange() {
    this.control.valueChanges.subscribe((val: TValue) => {
      this.viewToModelUpdate(val);
    });
  }

  setNgControlToControlValueAccessor() {
    if (this.valueAccessor instanceof ControlValueAccessor2) {
      this.valueAccessor.ngControl = this;
    }
  }
}
