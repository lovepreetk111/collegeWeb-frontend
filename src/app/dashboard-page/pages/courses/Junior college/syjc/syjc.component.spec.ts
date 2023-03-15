import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SYJCComponent } from './syjc.component';

describe('SYJCComponent', () => {
  let component: SYJCComponent;
  let fixture: ComponentFixture<SYJCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SYJCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SYJCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
