import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhdComComponent } from './phd-com.component';

describe('PhdComComponent', () => {
  let component: PhdComComponent;
  let fixture: ComponentFixture<PhdComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhdComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhdComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
