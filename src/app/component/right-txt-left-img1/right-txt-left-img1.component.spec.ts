import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightTxtLeftImg1Component } from './right-txt-left-img1.component';

describe('RightTxtLeftImg1Component', () => {
  let component: RightTxtLeftImg1Component;
  let fixture: ComponentFixture<RightTxtLeftImg1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightTxtLeftImg1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightTxtLeftImg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
