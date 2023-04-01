import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DCarouselComponent } from './d-carousel.component';

describe('DCarouselComponent', () => {
  let component: DCarouselComponent;
  let fixture: ComponentFixture<DCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
