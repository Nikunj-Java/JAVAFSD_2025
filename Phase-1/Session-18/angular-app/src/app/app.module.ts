import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from './CustomPipe';
import { CustomDatePipe } from './CustomDatePipes';
import { WeatherComponent } from './weather/weather.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { NestedComponent } from './nested/nested.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    PipesComponent,
    CustomPipe ,   //<--- need to import here
    CustomDatePipe, WeatherComponent, ChildAComponent, ChildBComponent, NestedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
