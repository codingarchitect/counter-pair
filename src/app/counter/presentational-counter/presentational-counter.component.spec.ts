import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationalCounterComponent } from './presentational-counter.component';

describe('PresentationalCounterComponent', () => {
  let component: PresentationalCounterComponent;
  let fixture: ComponentFixture<PresentationalCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationalCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationalCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
