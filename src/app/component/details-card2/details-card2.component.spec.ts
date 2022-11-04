import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCard2Component } from './details-card2.component';

describe('DetailsCard2Component', () => {
  let component: DetailsCard2Component;
  let fixture: ComponentFixture<DetailsCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCard2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
