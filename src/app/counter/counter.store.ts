import { InjectionToken } from '@angular/core';
import { Action, ActionReducer } from '@ngrx/store';

// IMPORT REDUXREGISTRY LIB
import { ReduxRegistry } from '../store-enhancers';

export interface CounterState {
  counterValue: number;
}

export const counterInitialState: CounterState = {
  counterValue: 0
};

export interface ActionTypes {
  increment,
  decrement
}

// REGISTER ACTIONCREATORS+REDUCER PAIRS
let register = new ReduxRegistry<CounterState, ActionTypes>()
register
  .add({
    alias: 'increment', 
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
    alias: 'decrement', 
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