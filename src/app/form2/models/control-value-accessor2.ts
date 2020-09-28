import { AbstractControl, ControlValueAccessor } from '@angular/forms';
import { FormControl2 } from './form-control2';
import { FormControl2Options } from './form-control2-options';
import { NgControl2 } from './ng-control2';
import {Directive, Input} from '@angular/core';

@Directive()
export abstract class ControlValueAccessor2<
  TValue = unknown,
  TOptions extends FormControl2Options = FormControl2Options,
  TControl extends FormControl2<TValue, TOptions> = FormControl2<TValue, TOptions>,
> implements ControlValueAccessor {

  get control(): AbstractControl | TControl | null {
    return this.ngControl?.control;
  }

  @Input() set options(val: TOptions) {
    if (this.control instanceof FormControl2) {
      this.control.options = val;
    }
    this._options = val;
  }

  get options(): TOptions {
    if (this.control instanceof FormControl2) {
      return this.control.options;
    }
    return this._options;
  }

  ngControl: NgControl2;
  disabled = false;

  // tslint:disable-next-line:variable-name
  protected _options: TOptions;

  onChange = (value: TValue) => {};
  onTouched = () => {};

  registerOnChange(fn: (value: TValue) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: TValue): void {}
}
