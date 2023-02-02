import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceTableComponent } from './place-table.component';

describe('PlaceTableComponent', () => {
  let component: PlaceTableComponent;
  let fixture: ComponentFixture<PlaceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
