import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule, ɵInternalFormsSharedModule as InternalFormsSharedModule} from '@angular/forms';
import {
  CUSTOM_REACTIVE_DRIVEN_DIRECTIVES,
  CUSTOM_TEMPLATE_DRIVEN_DIRECTIVES, REACTIVE_DRIVEN_DIRECTIVES,
  TEMPLATE_DRIVEN_DIRECTIVES
} from './directives/directives';


@NgModule({
  declarations: [
    ...CUSTOM_TEMPLATE_DRIVEN_DIRECTIVES,
    ...CUSTOM_REACTIVE_DRIVEN_DIRECTIVES
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    InternalFormsSharedModule,
    ...TEMPLATE_DRIVEN_DIRECTIVES,
    ...REACTIVE_DRIVEN_DIRECTIVES,
    ...CUSTOM_TEMPLATE_DRIVEN_DIRECTIVES,
    ...CUSTOM_REACTIVE_DRIVEN_DIRECTIVES
  ],
})
export class Form2Module {}
