import { compose, combineReducers } from "@ngrx/store";
import * as EnhancedCounterStore from './counter/enhanced-counter.store';

export interface AppState {
  root: EnhancedCounterStore.CounterPairState
}

export const appInitialState: AppState = {
  root: EnhancedCounterStore.counterPairInitialState
};