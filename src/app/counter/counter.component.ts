import { Component, OnInit, Input } from '@angular/core';

import { Store, Action } from '@ngrx/store';

import { Wrapper, EnhancedComponent } from '../store-enhancers';

import * as AppStore from '../root.store';
import * as EnhancedCounterStore from './enhanced-counter.store';
import * as CounterStore from './counter.store';

@Component({
  selector: 'ca-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent extends EnhancedComponent<AppStore.AppState, CounterStore.CounterState> {
  
  increment() {
    this.dispatch(new CounterStore.IncrementAction(null));
  }

  decrement() {
    this.dispatch(new CounterStore.DecrementAction(null));
  }

}
