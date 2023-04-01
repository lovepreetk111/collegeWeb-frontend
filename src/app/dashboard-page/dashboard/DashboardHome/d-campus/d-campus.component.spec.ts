import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DCampusComponent } from './d-campus.component';

describe('DCampusComponent', () => {
  let component: DCampusComponent;
  let fixture: ComponentFixture<DCampusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DCampusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
