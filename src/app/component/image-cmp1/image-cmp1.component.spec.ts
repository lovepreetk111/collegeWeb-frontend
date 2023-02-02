import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCmp1Component } from './image-cmp1.component';

describe('ImageCmp1Component', () => {
  let component: ImageCmp1Component;
  let fixture: ComponentFixture<ImageCmp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageCmp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageCmp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
