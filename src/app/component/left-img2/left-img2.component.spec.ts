import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftImg2Component } from './left-img2.component';

describe('LeftImg2Component', () => {
  let component: LeftImg2Component;
  let fixture: ComponentFixture<LeftImg2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftImg2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftImg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
