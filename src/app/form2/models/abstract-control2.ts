import { FormArray2 } from './form-array2';
import { FormControl2 } from './form-control2';
import { FormGroup2 } from './form-group2';
import {PartialType, RequiredType, SingleOrArrayType} from './generic-types';

export type AbstractControl2<TValue = any> = FormGroup2<TValue> | FormControl2<TValue> | FormArray2<TValue>;

export interface IAbstractControl2<TValue = any> {

  readonly value: SingleOrArrayType<TValue>;

  setValue(value: SingleOrArrayType<RequiredType<TValue>>,
           options?: { onlySelf?: boolean; emitEvent?: boolean }): void;

  patchValue(value: SingleOrArrayType<PartialType<TValue>>,
             options?: { onlySelf?: boolean; emitEvent?: boolean }): void;

  reset(value?: SingleOrArrayType<PartialType<TValue>>,
        options?: { onlySelf?: boolean; emitEvent?: boolean }): void;

  get<TControl extends AbstractControl2 = any>(path: Array<string | number> | string): TControl | null;
}
