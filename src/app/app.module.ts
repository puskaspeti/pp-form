import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Form2Module } from './form2/form2.module';
import {ExampleModule} from './example/example.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    Form2Module,
    ExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
