import { Action, ActionReducer } from '@ngrx/store';

import { buildUnwrapper, buildReducer } from '../store-enhancers';
import * as CounterStore from './counter.store';

export interface CounterPairState {
    counter1: CounterStore.CounterState,
    counter2: CounterStore.CounterState  
}

export const counterPairInitialState: CounterPairState = {
    counter1: CounterStore.counterInitialState,
    counter2: CounterStore.counterInitialState  
};

export const enhancedCounterReducer = buildReducer([{
  unwrapper: buildUnwrapper('Counter1'), // Unwraps Counter1 prefixed actions
  handler: (state, action) => ({
    ...state,
    counter1: CounterStore.counterReducer(state.counter1, action)
  })
}, {
  unwrapper: buildUnwrapper('Counter2'), // Unwraps Counter2 prefixed actions
  handler: (state, action) => ({
    ...state,
    counter2: CounterStore.counterReducer(state.counter2, action)
  })
}], counterPairInitialState);