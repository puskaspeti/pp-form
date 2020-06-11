import { AbstractControlOptions, FormControl, ValidatorFn } from '@angular/forms';
import { FormControl2Options } from './form-control2-options';

export class FormControl2<TValue = unknown, TOptions extends FormControl2Options = FormControl2Options> extends FormControl {
  constructor(
    formState?: TValue,
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    public options?: TOptions) {
      super(formState, validatorOrOpts);
  }
}
