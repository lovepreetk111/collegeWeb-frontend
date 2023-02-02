import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianDropdwnComponent } from './accordian-dropdwn.component';

describe('AccordianDropdwnComponent', () => {
  let component: AccordianDropdwnComponent;
  let fixture: ComponentFixture<AccordianDropdwnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordianDropdwnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordianDropdwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
