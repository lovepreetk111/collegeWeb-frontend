import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashdataTableComponent } from './dashdata-table.component';

describe('DashdataTableComponent', () => {
  let component: DashdataTableComponent;
  let fixture: ComponentFixture<DashdataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashdataTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashdataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
