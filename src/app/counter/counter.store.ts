import { Action, ActionReducer } from '@ngrx/store';

export const INCREMENT_ACTION: string = 'INCREMENT';
export const DECREMENT_ACTION: string = 'DECREMENT';

export class IncrementAction implements Action {
  readonly type: string = INCREMENT_ACTION;
  constructor(public payload: any) { }
}

export class DecrementAction implements Action {
  readonly type: string = DECREMENT_ACTION;
  constructor(public payload: any) { }
}

export type Actions = IncrementAction | DecrementAction;

export interface CounterState {
  counterValue: number;
}

export const counterInitialState: CounterState = {
  counterValue: 0
};

export function counterReducer(state: CounterState = counterInitialState, action: Actions): CounterState {
  switch (action.type) {
    case INCREMENT_ACTION: {
      return {
        counterValue: state.counterValue + 1
      }
    }
    case DECREMENT_ACTION: {
      return {
        counterValue: state.counterValue - 1
      }
    }
    default:
      return state;
  }
}

export const getState = (state: CounterState) => state;