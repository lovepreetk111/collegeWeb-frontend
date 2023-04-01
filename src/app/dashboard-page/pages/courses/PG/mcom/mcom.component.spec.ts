import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McomComponent } from './mcom.component';

describe('McomComponent', () => {
  let component: McomComponent;
  let fixture: ComponentFixture<McomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(McomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
