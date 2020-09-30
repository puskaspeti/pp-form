import { Directive, Input, Type } from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormControl} from '@angular/forms';
import { FormControl2 } from './form-control2';
import { FormControl2Options } from './form-control2-options';
import { NgControl2 } from './ng-control2';

@Directive()
export abstract class ControlValueAccessor2<
  TValue = unknown,
  TOptions extends FormControl2Options = FormControl2Options,
  TControl extends FormControl2<TValue, TOptions> = FormControl2<TValue, TOptions>,
  TAlma extends new() => TAlma = null
> implements ControlValueAccessor {

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

  get control(): AbstractControl | TControl | null {
    if (this.ngControl) {
      return this.ngControl.control;
    }

    if (!this.defaultControl) {
      this.setUpDefaultControl();
    }

    return this.defaultControl;
  }

  set control(val: AbstractControl | TControl) {
    this.defaultControl = val;
  }

  ngControl: NgControl2;
  disabled = false;

  protected defaultControl: AbstractControl;
  // tslint:disable-next-line:variable-name
  protected _options: TOptions;

  onChange = (value: TValue) => {};
  onTouched = () => {};
  onWriteValue = (value: TValue) => {};

  setUpDefaultControl(): void {
    this.control = new FormControl();
    this.onWriteValue = (value) => { this.control.setValue(value, { emitViewToModelChange: false }); };
    this.control.valueChanges.subscribe((value) => {
      this.onChange(value);
    });
  }

  registerOnChange(fn: (value: TValue) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: TValue): void {
    if (this.disabled) {
      return;
    }
    this.onWriteValue(value);
  }
}
