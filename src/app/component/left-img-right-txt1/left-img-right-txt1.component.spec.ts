import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftImgRightTxt1Component } from './left-img-right-txt1.component';

describe('LeftImgRightTxt1Component', () => {
  let component: LeftImgRightTxt1Component;
  let fixture: ComponentFixture<LeftImgRightTxt1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftImgRightTxt1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftImgRightTxt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
