import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {TextFormControlComponent} from './text-form-control/text-form-control.component';
import {Form2Module} from '../form2/form2.module';
import { NumberFormControlComponent } from './number-form-control/number-form-control.component';


@NgModule({
  declarations: [
    TextFormControlComponent,
    NumberFormControlComponent,
  ],
  imports: [
    CommonModule,
    Form2Module,
  ],
  exports: [
    TextFormControlComponent,
    NumberFormControlComponent,
  ],
})
export class ExampleModule {}
