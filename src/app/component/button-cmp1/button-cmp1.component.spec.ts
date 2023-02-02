import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCmp1Component } from './button-cmp1.component';

describe('ButtonCmp1Component', () => {
  let component: ButtonCmp1Component;
  let fixture: ComponentFixture<ButtonCmp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonCmp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonCmp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
