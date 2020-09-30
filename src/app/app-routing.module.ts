import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DefaultFormsExampleComponent} from './default-forms-example/default-forms-example.component';
import {CustomFormsExampleComponent} from './custom-forms-example/custom-forms-example.component';

const routes: Routes = [
  { path: '', component: DefaultFormsExampleComponent },
  { path: 'custom-forms', component: CustomFormsExampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
