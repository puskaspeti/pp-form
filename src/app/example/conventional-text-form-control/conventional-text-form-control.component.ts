import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessor2 } from '../../form2/models/control-value-accessor2';
import { ConventionalTextFormControl } from './conventional-text-form-control';
import { ConventionalTextFormControlOptions } from './conventional-text-form-control-options';

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

  handleInput($event: Event) {
    this.value = ($event.target as any).value;
    this.onChange(this.value);
  }
}
