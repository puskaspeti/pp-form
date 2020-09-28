import { AbstractControlOptions, FormControl, ValidatorFn } from '@angular/forms';
import { FormControl2Options } from './form-control2-options';
import {AbstractControl2, IAbstractControl2} from './abstract-control2';

export class FormControl2<TValue = any, TOptions extends FormControl2Options = FormControl2Options>
  extends FormControl implements IAbstractControl2<TValue> {

  readonly value: TValue;

  constructor(
    formState?: TValue,
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    public options?: TOptions) {
      super(formState, validatorOrOpts);
  }

  setValue(value: TValue,
           options?: { onlySelf?: boolean; emitEvent?: boolean }): void {
    super.setValue(value, options);
  }

  patchValue(value: TValue,
             options?: { onlySelf?: boolean; emitEvent?: boolean }): void {
    super.patchValue(value, options);
  }

  reset(value?: TValue,
        options?: { onlySelf?: boolean; emitEvent?: boolean }): void {
    super.reset(value, options);
  }

  get<TControl extends AbstractControl2>(path: Array<string | number> | string | keyof TValue): TControl | null {
    return super.get(path as Array<string | number> | string) as TControl;
  }
}
