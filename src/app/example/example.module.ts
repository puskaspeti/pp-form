import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConventionalTextFormControlComponent } from './conventional-text-form-control/conventional-text-form-control.component';
import { NumberFormControlComponent } from './number-form-control/number-form-control.component';
import { TextFormControlComponent } from './text-form-control/text-form-control.component';


@NgModule({
  declarations: [
    TextFormControlComponent,
    NumberFormControlComponent,
    ConventionalTextFormControlComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TextFormControlComponent,
    NumberFormControlComponent,
    ConventionalTextFormControlComponent,
  ],
})
export class ExampleModule {}
