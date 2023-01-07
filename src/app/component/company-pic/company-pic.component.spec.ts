import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPicComponent } from './company-pic.component';

describe('CompanyPicComponent', () => {
  let component: CompanyPicComponent;
  let fixture: ComponentFixture<CompanyPicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyPicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
