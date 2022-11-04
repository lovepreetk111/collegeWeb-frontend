import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCard3Component } from './detail-card3.component';

describe('DetailCard3Component', () => {
  let component: DetailCard3Component;
  let fixture: ComponentFixture<DetailCard3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCard3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
