import {Component} from '@angular/core';
import { TextFormControl } from './example/text-form-control/text-form-control';
import { TextFormControlOptions } from './example/text-form-control/text-form-control-options';
import { FormGroup, Validators } from '@angular/forms';
import {NgModel2Options} from './form2/models/ng-model2-options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form = new FormGroup({
    control1: new TextFormControl(null, Validators.required, { label: 'Label', placeholder: 'Placeholder' }),
    control2: new TextFormControl(null, Validators.required, { label: 'Label 2', placeholder: 'Placeholder 2' }),
  });

  model = 'some value';
  modelOptions: TextFormControlOptions & NgModel2Options = {
    controlType: TextFormControl,
    label: 'Label 2',
    placeholder: 'Placeholder 2'
  };
}
