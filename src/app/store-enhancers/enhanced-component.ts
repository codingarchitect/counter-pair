import { Component, OnInit, Input } from '@angular/core';

import { Store, Action } from '@ngrx/store';

import { Wrapper } from './wrapper';

@Component({
  selector : 'enhanced-component',
  template: ``
})
export class EnhancedComponent<RootState, SliceState> implements OnInit {
  @Input() actionWrapper: Wrapper
  @Input() stateSelector: (state: RootState) => SliceState;
  private state: SliceState;
  constructor(private store: Store<RootState>) {
    
  }

  ngOnInit() {
    this.store.select(this.stateSelector).subscribe(state => {
      this.state = state;
    });
  }

  dispatch(action: Action) {
    this.store.dispatch(this.actionWrapper(action));
  }

}