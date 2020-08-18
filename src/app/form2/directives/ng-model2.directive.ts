import {
  Directive,
  forwardRef,
  Host,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  Optional,
  Self,
  SimpleChanges,
} from '@angular/core';
import {
  AsyncValidator,
  AsyncValidatorFn,
  ControlContainer,
  ControlValueAccessor,
  NG_ASYNC_VALIDATORS,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgModel,
  Validator,
  ValidatorFn
} from '@angular/forms';
import {FormControl2} from '../models/form-control2';
import {FormControl2Options} from '../models/form-control2-options';
import {setNgControlToControlValueAccessor} from './shared';
import {Subscription} from 'rxjs';
import {NgModel2Options} from '../models/ng-model2-options';

export const formControlBinding: any = {
  provide: NgControl,
  useExisting: forwardRef(() => NgModel2Directive)
};

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[ngModel]',
  providers: [formControlBinding],
  exportAs: 'ngModel'
})
export class NgModel2Directive<
  TValue = unknown,
  TOptions extends FormControl2Options = FormControl2Options
> extends NgModel implements OnDestroy, OnChanges {

  control = new FormControl2<TValue, TOptions>();

  // tslint:disable-next-line: no-input-rename
  @Input('options') set controlOptions(val: TOptions & NgModel2Options) {
    this.setControlType(val);
    this.control.options = val;
  }

  private subscription: Subscription;

  constructor(
    @Optional() @Host() parent: ControlContainer,
    @Optional() @Self() @Inject(NG_VALIDATORS) validators: Array<Validator|ValidatorFn>,
    @Optional() @Self() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<AsyncValidator|AsyncValidatorFn>,
    @Optional() @Self() @Inject(NG_VALUE_ACCESSOR) valueAccessors: ControlValueAccessor[]) {
      super(parent, validators, asyncValidators, valueAccessors);
      this.setViewModelUpdateOnChange();
      setNgControlToControlValueAccessor(this, this.valueAccessor);
  }

  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.subscription.unsubscribe();
  }

  setViewModelUpdateOnChange() {
    this.subscription = this.control.valueChanges.subscribe((newValue: TValue) => {
      this.viewToModelUpdate(newValue);
    });
  }

  setControlType(option: TOptions & NgModel2Options) {
    if (!option?.controlType) {
      return;
    }

    if (option.controlType.prototype.isPrototypeOf(this.control)) {
      return;
    }

    if ((new option.controlType) instanceof FormControl2) {
      Object.setPrototypeOf(this.control, option.controlType.prototype);
    }
  }
}
