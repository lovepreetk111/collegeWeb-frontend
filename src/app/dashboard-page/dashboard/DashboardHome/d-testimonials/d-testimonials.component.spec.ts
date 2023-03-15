import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DTestimonialsComponent } from './d-testimonials.component';

describe('DTestimonialsComponent', () => {
  let component: DTestimonialsComponent;
  let fixture: ComponentFixture<DTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DTestimonialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
