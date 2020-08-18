import {Component} from '@angular/core';
import { TextFormControl } from './example/text-form-control/text-form-control';
import { TextFormControlOptions } from './example/text-form-control/text-form-control-options';
import { Validators } from '@angular/forms';
import {NgModel2Options} from './form2/models/ng-model2-options';
import {FormGroup2} from './form2/models/form-group2';
import {NumberFormControl} from './example/number-form-control/number-form-control';
import {FormArray2} from './form2/models/form-array2';

interface Demo {
  control1: number;
  control2?: string;
  subdemo: SubDemo;
  subDemoList: SubDemo[];
  numberList: number[];
}

interface SubDemo {
  control3: string;
  control4: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form = new FormGroup2<Demo>({
    control1: new NumberFormControl(null, Validators.required, { label: 'Label', placeholder: 'Placeholder' }),
    control2: new TextFormControl(null, Validators.required, { label: 'Label 2', placeholder: 'Placeholder 2' }),
    subdemo: new FormGroup2<SubDemo>({
      control3: new TextFormControl(),
      control4: new NumberFormControl()
    }),
    subDemoList: new FormArray2<SubDemo>([
      new FormGroup2<SubDemo>({
        control3: new TextFormControl(),
        control4: new NumberFormControl()
      })
    ]),
    numberList: new FormArray2<number>([
      new NumberFormControl(),
    ])
  });

  model = 'some value';
  modelOptions: TextFormControlOptions & NgModel2Options = {
    controlType: TextFormControl,
    label: 'Label 2',
    placeholder: 'Placeholder 2'
  };

  get control1(): NumberFormControl {
    return this.form.get<NumberFormControl>('control1');
  }

  get subdemoControl(): FormGroup2<SubDemo> {
    return this.form.get<FormGroup2>('subdemo');
  }

  get subdemoControl3(): TextFormControl {
    return this.form.get<TextFormControl>(['subdemo', 'control3']);
  }

  get subDemoControl4Value(): number {
    return this.subdemoControl.get<NumberFormControl>('control3').value;
  }
}
