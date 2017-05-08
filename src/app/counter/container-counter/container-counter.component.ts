import { Component, OnInit } from '@angular/core';

import { EnhancedComponent } from '../../store-enhancers';

import * as AppStore from '../../root.store';
import * as CounterStore from '../counter.store';

@Component({
  selector: 'ca-counter',
  templateUrl: './container-counter.component.html',
  styleUrls: ['./container-counter.component.css']
})
export class ContainerCounterComponent extends EnhancedComponent<AppStore.AppState, CounterStore.CounterState> {
  increment() {
    this.dispatch({ type: CounterStore.ActionTypes.INCREMENT});
  }
  decrement() {
    this.dispatch({ type: CounterStore.ActionTypes.DECREMENT});    
  }
}
