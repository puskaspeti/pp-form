import {FormGroup2} from './form-group2';
import {FormControl2} from './form-control2';
import {FormArray2} from './form-array2';

export type AbstractControl2<TValue = any> = FormGroup2<TValue> | FormControl2<TValue> | FormArray2;

export interface IAbstractControl2<TValue = any> {

  readonly value: TValue | TValue[];

  setValue(value: TValue | TValue[],
           options?: { onlySelf?: boolean; emitEvent?: boolean }): void;

  patchValue(value: TValue | TValue[],
             options?: { onlySelf?: boolean; emitEvent?: boolean }): void;

  reset(value?: TValue | TValue[],
        options?: { onlySelf?: boolean; emitEvent?: boolean }): void;

  get<TControl extends AbstractControl2>(path: Array<string | number> | string | keyof TValue): TControl | null;
}
