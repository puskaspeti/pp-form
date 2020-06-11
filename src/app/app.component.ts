import { Component } from '@angular/core';
import { TextFormControl } from './example/text-form-control/text-form-control';
import { TextFormControlOptions } from './example/text-form-control/text-form-control-options';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form = new FormGroup({
    control1: new TextFormControl(null, null, { label: 'Label', placeholder: 'Placeholder' })
  });

  model = 'some value';
  modelOptions: TextFormControlOptions = {
    label: 'Label 2',
    placeholder: 'Placeholder 2'
  };
}
