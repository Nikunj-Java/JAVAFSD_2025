import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RformComponent } from './rform/rform.component';

const routes: Routes = [
  {path:"rform",component:RformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
