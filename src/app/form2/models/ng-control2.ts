import { FormControl } from '@angular/forms';
import { FormControl2Directive } from '../directives/form-control2.directive';
import { NgModel2Directive } from '../directives/ng-model2.directive';

export type NgControl2<TControl extends FormControl = FormControl> = NgModel2Directive | FormControl2Directive<TControl>;
