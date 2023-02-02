import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSub1Component } from './course-sub1.component';

describe('CourseSub1Component', () => {
  let component: CourseSub1Component;
  let fixture: ComponentFixture<CourseSub1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseSub1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseSub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
