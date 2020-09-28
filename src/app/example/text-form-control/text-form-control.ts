import { FormControl2 } from '../../form2/models/form-control2';
import { TextFormControlOptions } from './text-form-control-options';

export class TextFormControl extends FormControl2<string, TextFormControlOptions> {
  setValue(value: string,
           options?: { onlySelf?: boolean; emitEvent?: boolean; emitModelToViewChange?: boolean; emitViewToModelChange?: boolean }) {
    console.log('[TextFormControl] setValue');
    super.setValue(value, options);
  }
}
