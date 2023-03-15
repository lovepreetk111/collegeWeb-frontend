import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FYJCComponent } from './fyjc.component';

describe('FYJCComponent', () => {
  let component: FYJCComponent;
  let fixture: ComponentFixture<FYJCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FYJCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FYJCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
