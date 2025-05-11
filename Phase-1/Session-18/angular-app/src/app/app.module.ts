import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from './CustomPipe';
import { CustomDatePipe } from './CustomDatePipes';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    PipesComponent,
    CustomPipe ,   //<--- need to import here
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
