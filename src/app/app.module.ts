import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';

import { counterPairReducer } from './counter-pair/counter-pair.store';
import { AppState, appInitialState } from './root.store';
import { AppComponent } from './app.component';
import { PresentationalCounterComponent } from './counter/presentational-counter/presentational-counter.component';
import { ContainerCounterComponent } from './counter/container-counter/container-counter.component';
import { CounterPairComponent } from './counter-pair/counter-pair.component';
 
@NgModule({
  declarations: [
    AppComponent,
    PresentationalCounterComponent,
    ContainerCounterComponent,
    CounterPairComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({
      root: counterPairReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }