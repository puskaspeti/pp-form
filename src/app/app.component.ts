import { Component } from '@angular/core';
import { TextFormControl } from './example/text-form-control/text-form-control';
import { TextFormControlOptions } from './example/text-form-control/text-form-control-options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  control = new TextFormControl(null, null, { label: 'Label', placeholder: 'Placeholder' });

  model = 'some value';
  modelOptions: TextFormControlOptions = {
    label: 'Label 2',
    placeholder: 'Placeholder 2'
  };
}
