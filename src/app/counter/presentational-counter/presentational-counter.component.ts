import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ca-presentational-counter',
  templateUrl: './presentational-counter.component.html',
  styleUrls: ['./presentational-counter.component.css']
})
export class PresentationalCounterComponent {

  @Input() state; 
  @Output() incremented = new EventEmitter();
  @Output() decremented = new EventEmitter();

  constructor() {}     

  increment() {
    this.incremented.emit();
  }

  decrement() {
    this.decremented.emit();
  }
}