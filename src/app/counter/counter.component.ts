import { Component, OnInit, Input } from '@angular/core';

import { Store } from '@ngrx/store';

import * as AppStore from '../root.store';
import * as EnhancedCounterStore from './enhanced-counter.store';
import * as CounterStore from './counter.store';

@Component({
  selector: 'ca-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() actionWrapper: (action: CounterStore.Actions) => EnhancedCounterStore.Actions;
  @Input() stateSelector: (state: AppStore.AppState) => CounterStore.CounterState;
  private state: CounterStore.CounterState;
  constructor(private store: Store<AppStore.AppState>) {
    
  }

  ngOnInit() {
    this.store.select(this.stateSelector).subscribe(state => {
      this.state = state;
    });
  }

  increment() {
    this.store.dispatch(this.actionWrapper(new CounterStore.IncrementAction(null)));
  }

  decrement() {
    this.store.dispatch(this.actionWrapper(new CounterStore.DecrementAction(null)));
  }

}
