import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomFormsExampleComponent} from './custom-forms-example.component';
import {ExampleModule} from '../example/example.module';
import {Form2Module} from '../form2/form2.module';



@NgModule({
  declarations: [CustomFormsExampleComponent],
  imports: [
    CommonModule,
    ExampleModule,
    Form2Module,
  ]
})
export class CustomFormsExampleModule { }
