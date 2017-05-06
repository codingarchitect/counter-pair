import { Component } from '@angular/core';

import { Action } from '@ngrx/store';

import { buildWrapper, Wrapper } from './store-enhancers';

import * as RootStore from './root.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  counter1Wrapper = (action: Action) => buildWrapper(action, 'Counter1');
  counter2Wrapper = (action: Action) => buildWrapper(action, 'Counter2');
  counter1Selector = (state: RootStore.AppState) => state.root.counter1;
  counter2Selector = (state: RootStore.AppState) => state.root.counter2;
}
