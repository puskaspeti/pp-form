import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TextFormControlComponent } from './example/text-form-control/text-form-control.component';
import { Form2Module } from './form2/form2.module';

@NgModule({
  declarations: [
    AppComponent,
    TextFormControlComponent,
  ],
  imports: [
    BrowserModule,
    Form2Module,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
