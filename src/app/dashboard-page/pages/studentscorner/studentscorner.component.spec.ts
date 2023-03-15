import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentscornerComponent } from './studentscorner.component';

describe('StudentscornerComponent', () => {
  let component: StudentscornerComponent;
  let fixture: ComponentFixture<StudentscornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentscornerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentscornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
