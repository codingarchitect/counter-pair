import { compose, combineReducers } from "@ngrx/store";
import * as CounterPairStore from './counter-pair/counter-pair.store';

export interface AppState {
  root: CounterPairStore.CounterPairState
}

export const appInitialState: AppState = {
  root: CounterPairStore.counterPairInitialState
};