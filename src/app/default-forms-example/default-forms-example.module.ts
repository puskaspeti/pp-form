import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultFormsExampleComponent } from './default-forms-example.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ExampleModule} from '../example/example.module';



@NgModule({
  declarations: [DefaultFormsExampleComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExampleModule
  ]
})
export class DefaultFormsExampleModule { }
