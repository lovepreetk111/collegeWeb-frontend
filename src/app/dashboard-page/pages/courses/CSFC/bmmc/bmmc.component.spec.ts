import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmmcComponent } from './bmmc.component';

describe('BmmcComponent', () => {
  let component: BmmcComponent;
  let fixture: ComponentFixture<BmmcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmmcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
