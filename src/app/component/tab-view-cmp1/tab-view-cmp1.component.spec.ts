import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabViewCmp1Component } from './tab-view-cmp1.component';

describe('TabViewCmp1Component', () => {
  let component: TabViewCmp1Component;
  let fixture: ComponentFixture<TabViewCmp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabViewCmp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabViewCmp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
