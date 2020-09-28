import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor2} from '../../form2/models/control-value-accessor2';
import {ConventionalTextFormControlOptions} from './conventional-text-form-control-options';
import {ConventionalTextFormControl} from './conventional-text-form-control';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

export const ngValueAccessor: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ConventionalTextFormControlComponent),
  multi: true,
};

@Component({
  selector: 'app-conventional-text-form-control',
  templateUrl: './conventional-text-form-control.component.html',
  styleUrls: ['./conventional-text-form-control.component.scss'],
  providers: [ngValueAccessor]
})
export class ConventionalTextFormControlComponent
  extends ControlValueAccessor2<string, ConventionalTextFormControlOptions, ConventionalTextFormControl> {

  value: string;

  writeValue(value: string) {
    if (!this.disabled) {
      this.value = value;
    }
  }
}
