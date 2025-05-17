import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { PipesComponent } from './pipes/pipes.component';
import { NestedComponent } from './nested/nested.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { TformComponent } from './tform/tform.component';

const routes: Routes = [
  
  {path:"weather",component:WeatherComponent},
  {path:"pipes",component:PipesComponent},
  {path:"tform",component:TformComponent},
  {path:"nested",component:NestedComponent,children:[
    {path:"",redirectTo:"child-a",pathMatch:"full"},
    {path:"child-a",component:ChildAComponent},
    {path:"child-b",component:ChildBComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
