import { AbstractControlOptions, FormControl, ValidatorFn } from '@angular/forms';
import { AbstractControl2, IAbstractControl2 } from './abstract-control2';
import { FormControl2Options } from './form-control2-options';
import {PartialType, RequiredType} from './generic-types';

export class FormControl2<TValue = any, TOptions extends FormControl2Options = FormControl2Options>
  extends FormControl implements IAbstractControl2<TValue> {

  readonly value: TValue;

  constructor(
    formState?: TValue,
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    public options?: TOptions) {
      super(formState, validatorOrOpts);
  }

  setValue(value: RequiredType<TValue>,
           options?: {
             onlySelf?: boolean;
             emitEvent?: boolean,
             emitModelToViewChange?: boolean,
             emitViewToModelChange?: boolean
          }): void {
    super.setValue(value, options);
  }

  patchValue(value: PartialType<TValue>,
             options?: {
               onlySelf?: boolean;
               emitEvent?: boolean,
               emitModelToViewChange?: boolean,
               emitViewToModelChange?: boolean
            }): void {
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
