import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCounterComponent } from './container-counter.component';

describe('ContainerCounterComponent', () => {
  let component: ContainerCounterComponent;
  let fixture: ComponentFixture<ContainerCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
