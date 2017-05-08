import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterPairComponent } from './counter-pair.component';

describe('CounterPairComponent', () => {
  let component: CounterPairComponent;
  let fixture: ComponentFixture<CounterPairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterPairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterPairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
