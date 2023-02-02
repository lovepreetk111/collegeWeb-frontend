import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent1Component } from './form-component1.component';

describe('FormComponent1Component', () => {
  let component: FormComponent1Component;
  let fixture: ComponentFixture<FormComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponent1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
