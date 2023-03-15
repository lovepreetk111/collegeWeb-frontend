import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAcademicsComponent } from './d-academics.component';

describe('DAcademicsComponent', () => {
  let component: DAcademicsComponent;
  let fixture: ComponentFixture<DAcademicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DAcademicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DAcademicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
