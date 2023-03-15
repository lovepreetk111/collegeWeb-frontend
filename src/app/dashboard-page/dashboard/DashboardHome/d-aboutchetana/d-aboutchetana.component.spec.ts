import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAboutchetanaComponent } from './d-aboutchetana.component';

describe('DAboutchetanaComponent', () => {
  let component: DAboutchetanaComponent;
  let fixture: ComponentFixture<DAboutchetanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DAboutchetanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DAboutchetanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
