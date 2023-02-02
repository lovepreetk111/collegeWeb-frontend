import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftImg1Component } from './left-img1.component';

describe('LeftImg1Component', () => {
  let component: LeftImg1Component;
  let fixture: ComponentFixture<LeftImg1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftImg1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftImg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
