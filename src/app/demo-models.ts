import {FormGroup2} from './form2/models/form-group2';
import {NumberFormControl} from './example/number-form-control/number-form-control';
import {Validators} from '@angular/forms';
import {TextFormControl} from './example/text-form-control/text-form-control';
import {ConventionalTextFormControl} from './example/conventional-text-form-control/conventional-text-form-control';
import {FormArray2} from './form2/models/form-array2';

export interface Demo {
  control1: number;
  control2?: string;
  subDemo: SubDemo;
  subDemoList: SubDemo[];
  numberList: number[];
}

export interface SubDemo {
  control3: string;
  control4: number;
}


export function demoForm() {
  return new FormGroup2<Demo>({
    control1: new NumberFormControl(null, Validators.required, { label: 'Label', placeholder: 'Placeholder' }),
    control2: new TextFormControl(null, Validators.required, { label: 'Label 2', placeholder: 'Placeholder 2' }),
    subDemo: new FormGroup2<SubDemo>({
      control3: new ConventionalTextFormControl('value'),
      control4: new NumberFormControl()
    }),
    subDemoList: new FormArray2<SubDemo>([
      new FormGroup2<SubDemo>({
        control3: new TextFormControl(),
        control4: new NumberFormControl()
      })
    ]),
    numberList: new FormArray2<number>([
      new NumberFormControl(1),
    ])
  });
}
