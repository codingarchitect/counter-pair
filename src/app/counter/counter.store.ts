import { InjectionToken } from '@angular/core';
import { Action, ActionReducer } from '@ngrx/store';

import { ActionCreator, ReduxRegistry, createEnum } from '../store-enhancers';
import { Actions, Model,  } from 'ngrx-modular-store';

export interface CounterState {
  counterValue: number;
}

export const counterInitialState: CounterState = {
  counterValue: 0
};

export const ActionTypes = createEnum([
  "increment",
  "decrement"
]);

export type ActionTypes = keyof typeof ActionTypes;

// REGISTER ACTIONCREATORS+REDUCER PAIRS
let register = new ReduxRegistry<CounterState, ActionTypes>()
register
  .add({
    alias: ActionTypes.increment, 
    create: function() {
      return {
        type: 'INCREMENT'
      }
    },
    reduce: function(state, action) {
      return {
        counterValue: state.counterValue + 1
      }
    }
  })
  .add({
    alias: ActionTypes.decrement, 
    create: function() {
      return {
        type: 'DECREMENT'
      }
    },
    reduce: function(state, action) {
      return {
        counterValue: state.counterValue - 1
      }
    }
  });

export const REDUX_REGISTRY_TOKEN = new InjectionToken<string>('ReduxRegistry');

export const COUNTER_STORE_REDUX_REGISTRY_PROVIDER = [
  { provide: REDUX_REGISTRY_TOKEN, useValue: register }
];

export const counterReducer = register.reducer;
export const getState = (state: CounterState) => state;

Actions.counter = {
  TYPES: ActionTypes,
  increment: register.getActionCreator(ActionTypes.increment),
  decrement: register.getActionCreator(ActionTypes.decrement)
};

declare module 'ngrx-modular-store' {
  interface Actions {
    counter: {
      TYPES: typeof ActionTypes;
      increment: ActionCreator;
      decrement: ActionCreator;
    };
  }
}