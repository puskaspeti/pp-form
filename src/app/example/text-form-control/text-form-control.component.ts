import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessor2 } from 'src/app/form2/models/control-value-accessor2';
import { TextFormControl } from './text-form-control';
import { TextFormControlOptions } from './text-form-control-options';

export const ngValueAccessor: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextFormControlComponent),
  multi: true,
};

@Component({
  selector: 'app-text-form-control',
  templateUrl: './text-form-control.component.html',
  styleUrls: ['./text-form-control.component.scss'],
  providers: [ngValueAccessor],
})
export class TextFormControlComponent extends ControlValueAccessor2<string, TextFormControlOptions, TextFormControl> {
  constructor() {
    super();
  }
}
