import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashnoticeComponent } from './dashnotice.component';

describe('DashnoticeComponent', () => {
  let component: DashnoticeComponent;
  let fixture: ComponentFixture<DashnoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashnoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
