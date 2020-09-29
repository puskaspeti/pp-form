import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormControl2 } from './form-control2';
import { FormControl2Options } from './form-control2-options';
import { NgControl2 } from './ng-control2';

@Directive()
export abstract class ControlValueAccessor2<
  TValue = unknown,
  TOptions extends FormControl2Options = FormControl2Options,
  TControl extends FormControl2<TValue, TOptions> = FormControl2<TValue, TOptions>,
> implements ControlValueAccessor, OnInit, OnDestroy {

  control: AbstractControl | TControl | null;

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
  protected subscription: Subscription;

  onChange = (value: TValue) => {};
  onTouched = () => {};
  onWriteValue = (value: TValue) => {};

  ngOnInit(): void {
    if (this.control) {
      return;
    }

    this.setUpDefaultControl();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  setUpDefaultControl(): void {
    this.control = new FormControl();
    this.onWriteValue = (value) => { this.control.setValue(value, { emitViewToModelChange: false }); };
    this.subscription = this.control.valueChanges.subscribe((value) => {
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
