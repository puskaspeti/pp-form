export type SingleOrArrayType<TValue> = TValue | TValue[];
export type RequiredType<TValue> = TValue extends object ? Required<TValue> : TValue;
export type PartialType<TValue> = TValue extends object ? Partial<TValue> : TValue;
export type ArrayElementType<ArrayType extends readonly unknown[]> = ArrayType[number];
