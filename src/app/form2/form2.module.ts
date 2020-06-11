import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormControl2Directive } from './directives/form-control2.directive';
import { NgModel2Directive } from './directives/ng-model2.directive';


@NgModule({
  declarations: [
    FormControl2Directive,
    NgModel2Directive,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FormControl2Directive,
    NgModel2Directive,
  ],
})
export class Form2Module {}
