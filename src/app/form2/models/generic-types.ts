import {AbstractControl2} from './abstract-control2';
import {FormArray2} from './form-array2';
import {FormControl2} from './form-control2';
import {FormGroup2} from './form-group2';

export type SingleOrArrayType<TValue> = TValue | TValue[];
export type RequiredType<TValue> = TValue extends object ? Required<TValue> : TValue;
export type PartialType<TValue> = TValue extends object ? Partial<TValue> : TValue;
export type BaseType<TType> = TType extends (infer TArrayElementType)[] ? TArrayElementType : TType;

export type FormGroupControlsType<TValue> = {
  [P in keyof Required<TValue>]: TValue[P] extends any[]
    ? FormArray2<TValue[P]> | FormControl2<TValue[P]>
    : FormGroup2<TValue[P]> | FormControl2<TValue[P]>
};
