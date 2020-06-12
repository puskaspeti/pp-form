import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {TextFormControlComponent} from './text-form-control/text-form-control.component';
import {Form2Module} from '../form2/form2.module';


@NgModule({
  declarations: [
    TextFormControlComponent,
  ],
  imports: [
    CommonModule,
    Form2Module,
  ],
  exports: [
    TextFormControlComponent,
  ],
})
export class ExampleModule {}
