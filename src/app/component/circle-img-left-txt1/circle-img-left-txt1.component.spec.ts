import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleImgLeftTxt1Component } from './circle-img-left-txt1.component';

describe('CircleImgLeftTxt1Component', () => {
  let component: CircleImgLeftTxt1Component;
  let fixture: ComponentFixture<CircleImgLeftTxt1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleImgLeftTxt1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleImgLeftTxt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
