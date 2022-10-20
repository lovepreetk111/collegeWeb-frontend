import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopImgBtmText1Component } from './top-img-btm-text1.component';

describe('TopImgBtmText1Component', () => {
  let component: TopImgBtmText1Component;
  let fixture: ComponentFixture<TopImgBtmText1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopImgBtmText1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopImgBtmText1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
