import { Component } from '@angular/core';
import {NumberFormControl} from '../example/number-form-control/number-form-control';
import {TextFormControl} from '../example/text-form-control/text-form-control';
import {TextFormControlOptions} from '../example/text-form-control/text-form-control-options';
import {demoForm} from '../demo-models';

@Component({
  selector: 'app-default-forms-example',
  templateUrl: './default-forms-example.component.html',
  styleUrls: ['./default-forms-example.component.scss']
})
export class DefaultFormsExampleComponent {

  form = demoForm;

  model = 'some value';
  controlType = TextFormControl;
  modelOptions: TextFormControlOptions = {
    label: 'Label 3',
    placeholder: 'Placeholder 3'
  };

  get control1() {
    return this.form.get<NumberFormControl>('control1');
  }

  get control2() {
    return this.form.get<TextFormControl>('control2');
  }

  get control3(): TextFormControl {
    return this.form.get('subDemo').get('control3');
  }

}
