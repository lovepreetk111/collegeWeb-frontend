import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftTxtRightTextComponent } from './left-txt-right-text.component';

describe('LeftTxtRightTextComponent', () => {
  let component: LeftTxtRightTextComponent;
  let fixture: ComponentFixture<LeftTxtRightTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftTxtRightTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftTxtRightTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
