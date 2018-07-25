import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 import { DetailComponent } from './component/detail/detail.component';
 import { ListComponent } from './component/list/list.component';




const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'detail/:id', component: DetailComponent }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}