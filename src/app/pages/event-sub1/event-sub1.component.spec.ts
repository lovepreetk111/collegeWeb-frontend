import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSub1Component } from './event-sub1.component';

describe('EventSub1Component', () => {
  let component: EventSub1Component;
  let fixture: ComponentFixture<EventSub1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventSub1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventSub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
