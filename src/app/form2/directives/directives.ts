import {Type} from '@angular/core';
import {FormControl2Directive} from './form-control2.directive';
import {FormControlName2Directive} from './form-control-name2.directive';
import {
  FormArrayName,
  FormGroupDirective,
  FormGroupName,
  NgForm,
  NgModelGroup,
} from '@angular/forms';
import {NgModel2Directive} from './ng-model2.directive';

/**
 * Based on https://github.com/angular/angular/blob/9.1.11/packages/forms/src/directives.ts
 */

export const TEMPLATE_DRIVEN_DIRECTIVES: Type<any>[] = [NgModelGroup, NgForm];

export const CUSTOM_TEMPLATE_DRIVEN_DIRECTIVES: Type<any>[] = [NgModel2Directive];

export const REACTIVE_DRIVEN_DIRECTIVES: Type<any>[] = [FormGroupDirective, FormGroupName, FormArrayName];

export const CUSTOM_REACTIVE_DRIVEN_DIRECTIVES: Type<any>[] = [FormControl2Directive, FormControlName2Directive];
