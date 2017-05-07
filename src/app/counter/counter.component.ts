import { Component, OnInit, Input, Inject } from '@angular/core';

import { Store, Action } from '@ngrx/store';

import { Wrapper, EnhancedComponent, ReduxRegistry } from '../store-enhancers';

import * as AppStore from '../root.store';
import * as EnhancedCounterStore from './enhanced-counter.store';
import * as CounterStore from './counter.store';

@Component({
  selector: 'ca-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  providers: [
    CounterStore.COUNTER_STORE_REDUX_REGISTRY_PROVIDER
  ]
})
export class CounterComponent extends EnhancedComponent<AppStore.AppState, CounterStore.CounterState> {

  constructor(
    store: Store<AppStore.AppState>,
    @Inject(CounterStore.REDUX_REGISTRY_TOKEN) private registry: ReduxRegistry<CounterStore.CounterState, CounterStore.ActionTypes>) {
    super(store);
  }

  increment() {
    this.dispatch(this.registry.getActionCreator(CounterStore.ActionTypes.increment)());
  }

  decrement() {
    this.dispatch(this.registry.getActionCreator(CounterStore.ActionTypes.decrement)());
    // The following will cause compilation error
    // this.dispatch(this.registry.getActionCreator("decrementBy2")());
  }

}
