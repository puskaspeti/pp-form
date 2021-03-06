import { AbstractControlOptions, AsyncValidatorFn, FormArray, ValidatorFn} from '@angular/forms';
import { AbstractControl2, IAbstractControl2 } from './abstract-control2';
import {BaseType, PartialType, RequiredType} from './generic-types';

export class FormArray2<TValue extends any[] = any[]> extends FormArray implements IAbstractControl2<BaseType<TValue>> {
  readonly controls: AbstractControl2<BaseType<TValue>>[];
  readonly value: TValue;

  constructor(
    controls: AbstractControl2<BaseType<TValue>>[],
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ) {
    super(controls, validatorOrOpts, asyncValidator);
  }

  setValue(value: RequiredType<BaseType<TValue>>[],
           options?: { onlySelf?: boolean; emitEvent?: boolean }): void {
    super.setValue(value, options);
  }

  patchValue(value: PartialType<BaseType<TValue>>[],
             options?: { onlySelf?: boolean; emitEvent?: boolean }): void {
    super.patchValue(value, options);
  }

  reset(value?: PartialType<BaseType<TValue>>[],
        options?: { onlySelf?: boolean; emitEvent?: boolean }): void {
    super.reset(value, options);
  }

  get<TControl extends AbstractControl2 = any>(path: Array<string | number> | string): TControl | null {
    return super.get(path) as TControl;
  }
}
