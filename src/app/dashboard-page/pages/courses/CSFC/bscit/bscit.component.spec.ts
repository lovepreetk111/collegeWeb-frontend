import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BscitComponent } from './bscit.component';

describe('BscitComponent', () => {
  let component: BscitComponent;
  let fixture: ComponentFixture<BscitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BscitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BscitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
