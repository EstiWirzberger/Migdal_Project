import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneNnumbersPipe } from './phone-nnumbers.pipe';

const routes: Routes = [
  {path: 'phone', component:PhoneNnumbersPipe}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
