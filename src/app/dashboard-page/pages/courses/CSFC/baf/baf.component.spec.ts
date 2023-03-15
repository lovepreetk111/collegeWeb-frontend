import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BafComponent } from './baf.component';

describe('BafComponent', () => {
  let component: BafComponent;
  let fixture: ComponentFixture<BafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BafComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
