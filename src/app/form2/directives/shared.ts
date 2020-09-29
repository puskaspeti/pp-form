import { ControlValueAccessor } from '@angular/forms';
import { ControlValueAccessor2 } from '../models/control-value-accessor2';
import { NgControl2 } from '../models/ng-control2';

export function setNgControlToControlValueAccessor(ngControl: NgControl2, valueAccessor: ControlValueAccessor) {
  if (valueAccessor instanceof ControlValueAccessor2) {
    valueAccessor.control = ngControl.control;
  }
}
