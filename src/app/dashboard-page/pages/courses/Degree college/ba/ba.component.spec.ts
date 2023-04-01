import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaComponent } from './ba.component';

describe('BaComponent', () => {
  let component: BaComponent;
  let fixture: ComponentFixture<BaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
