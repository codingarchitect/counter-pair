import { Action, ActionReducer } from '@ngrx/store';

import * as CounterStore from './counter.store';

export const COUNTER1_ACTION: string = 'COUNTER1';
export const COUNTER2_ACTION: string = 'COUNTER2';

export class Counter1Action implements Action {
  readonly type: string = COUNTER1_ACTION;
  constructor(public payload: CounterStore.Actions) {}
}

export class Counter2Action implements Action {
  readonly type: string = COUNTER2_ACTION;
  constructor(public payload: CounterStore.Actions) {}
}

export type Actions = Counter1Action | Counter2Action;

export interface CounterPairState {
    counter1: CounterStore.CounterState,
    counter2: CounterStore.CounterState  
}

export const counterPairInitialState: CounterPairState = {
    counter1: CounterStore.counterInitialState,
    counter2: CounterStore.counterInitialState  
};

export function enhancedCounterReducer(state: CounterPairState = counterPairInitialState, action: Actions): CounterPairState {
  switch (action.type) {
    case COUNTER1_ACTION: {
      return {
        ...state,
        counter1: CounterStore.counterReducer(state.counter1, action.payload)
      }
    }
    case COUNTER2_ACTION: {
      return {
        ...state,
        counter2: CounterStore.counterReducer(state.counter2, action.payload)
      }
    }
    default:
      return state;
  }
}