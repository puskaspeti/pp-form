import {AbstractControlOptions, FormArray, ValidatorFn} from '@angular/forms';
import {AbstractControl2, IAbstractControl2} from './abstract-control2';

export class FormArray2<TValue = any> extends FormArray implements IAbstractControl2 {

  readonly value: TValue[];

  constructor(
    formState?: AbstractControl2<TValue>[],
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null) {
    super(formState, validatorOrOpts);
  }

  setValue(value: TValue[],
           options?: { onlySelf?: boolean; emitEvent?: boolean }): void {
    super.setValue(value, options);
  }

  patchValue(value: TValue[],
             options?: { onlySelf?: boolean; emitEvent?: boolean }): void {
    super.patchValue(value, options);
  }

  reset(value?: TValue[],
        options?: { onlySelf?: boolean; emitEvent?: boolean }): void {
    super.reset(value, options);
  }

  get<TControl extends AbstractControl2>(path: Array<string | number> | keyof TValue & string): TControl | null {
    return super.get(path as Array<string | number> | string) as TControl;
  }
}
