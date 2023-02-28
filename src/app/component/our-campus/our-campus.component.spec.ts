import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCampusComponent } from './our-campus.component';

describe('OurCampusComponent', () => {
  let component: OurCampusComponent;
  let fixture: ComponentFixture<OurCampusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurCampusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
