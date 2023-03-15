import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashdisplayComponent } from './dashdisplay.component';

describe('DashdisplayComponent', () => {
  let component: DashdisplayComponent;
  let fixture: ComponentFixture<DashdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashdisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
