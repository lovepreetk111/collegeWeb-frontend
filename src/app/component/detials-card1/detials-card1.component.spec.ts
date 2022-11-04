import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetialsCard1Component } from './detials-card1.component';

describe('DetialsCard1Component', () => {
  let component: DetialsCard1Component;
  let fixture: ComponentFixture<DetialsCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetialsCard1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetialsCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
