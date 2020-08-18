import { Component } from '@angular/core';
import {ControlValueAccessor2} from '../../form2/models/control-value-accessor2';
import {NumberFormControlOptions} from './number-form-control-options';
import {NumberFormControl} from './number-form-control';

@Component({
  selector: 'app-number-form-control',
  templateUrl: './number-form-control.component.html',
  styleUrls: ['./number-form-control.component.scss']
})
export class NumberFormControlComponent extends ControlValueAccessor2<number, NumberFormControlOptions, NumberFormControl> {
  constructor() {
    super();
  }
}
