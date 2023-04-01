import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YcmouComponent } from './ycmou.component';

describe('YcmouComponent', () => {
  let component: YcmouComponent;
  let fixture: ComponentFixture<YcmouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YcmouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YcmouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
