import { AbstractControl, ControlValueAccessor } from '@angular/forms';
import { FormControl2 } from './form-control2';
import { FormControl2Options } from './form-control2-options';
import { NgControl2 } from './ng-control2';

export class ControlValueAccessor2<
  TValue = unknown,
  TOptions extends FormControl2Options = FormControl2Options,
  TControl extends FormControl2<TValue, TOptions> = FormControl2<TValue, TOptions>,
> implements ControlValueAccessor {

  ngControl: NgControl2;
  disabled = false;

  get control(): AbstractControl | TControl | null {
    return this.ngControl?.control;
  }

  get options(): TOptions | null {
    if (this.control instanceof FormControl2) {
      return this.control.options;
    }
    return null;
  }

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

  writeValue(value: TValue): void {
    if (this.disabled) {
      return;
    }

    this.onChange(value);
  }
}
