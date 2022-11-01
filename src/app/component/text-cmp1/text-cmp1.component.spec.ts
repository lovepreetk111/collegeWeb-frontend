import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCmp1Component } from './text-cmp1.component';

describe('TextCmp1Component', () => {
  let component: TextCmp1Component;
  let fixture: ComponentFixture<TextCmp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextCmp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextCmp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
