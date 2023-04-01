import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmsComponent } from './bms.component';

describe('BmsComponent', () => {
  let component: BmsComponent;
  let fixture: ComponentFixture<BmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
