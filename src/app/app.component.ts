import { Component } from '@angular/core';

import * as EnhancedCounterStore from './counter/enhanced-counter.store';
import * as CounterStore from './counter/counter.store';
import * as RootStore from './root.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  counter1Wrapper = (action: CounterStore.Actions) => new EnhancedCounterStore.Counter1Action(action);
  counter2Wrapper = (action: CounterStore.Actions) => new EnhancedCounterStore.Counter2Action(action);
  counter1Selector = (state: RootStore.AppState) => state.root.counter1;
  counter2Selector = (state: RootStore.AppState) => state.root.counter2;
}
