import {FormControl2} from '../../form2/models/form-control2';
import {AbstractControlOptions, ValidatorFn} from '@angular/forms';
import {NumberFormControlOptions} from './number-form-control-options';

export class NumberFormControl extends FormControl2<number> {
  constructor(
    formState?: number,
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    public options?: NumberFormControlOptions
  ) {
    super(formState, validatorOrOpts, options);
  }
}
