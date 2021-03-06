import {AbstractControlOptions, AsyncValidatorFn, FormGroup, ValidatorFn} from '@angular/forms';
import { AbstractControl2, IAbstractControl2 } from './abstract-control2';
import {FormGroupControlsType, PartialType, RequiredType} from './generic-types';

export class FormGroup2<TValue = any> extends FormGroup implements IAbstractControl2<TValue> {
  readonly controls: FormGroupControlsType<TValue>;
  readonly value: TValue;

  constructor(
    controls: FormGroupControlsType<TValue>,
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ) {
    super(controls, validatorOrOpts, asyncValidator);
  }

  setValue(value: RequiredType<TValue>,
           options?: { onlySelf?: boolean; emitEvent?: boolean }): void {
    super.setValue(value, options);
  }

  patchValue(value: PartialType<TValue>,
             options?: { onlySelf?: boolean; emitEvent?: boolean }): void {
    super.patchValue(value, options);
  }

  reset(value?: PartialType<TValue>,
        options?: { onlySelf?: boolean; emitEvent?: boolean }): void {
    super.reset(value, options);
  }

  get<TControl extends AbstractControl2 = any>(path: Array<string | number> | string | keyof TValue): TControl | null {
    return super.get(path as Array<string | number> | string) as TControl;
  }
}
