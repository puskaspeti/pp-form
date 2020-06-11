import { AbstractControlOptions, ValidatorFn } from '@angular/forms';
import { FormControl2 } from '../../form2/models/form-control2';
import { TextFormControlOptions } from './text-form-control-options';

export class TextFormControl extends FormControl2<string> {
  constructor(
    formState?: string,
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    public options?: TextFormControlOptions
  ) {
    super(formState, validatorOrOpts, options);
  }
}
