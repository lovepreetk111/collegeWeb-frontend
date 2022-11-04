import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-view-cmp1',
  templateUrl: './tab-view-cmp1.component.html',
  styleUrls: ['./tab-view-cmp1.component.scss']
})
export class TabViewCmp1Component implements OnInit {
  active = 1;
  ngOnInit(): void {
  }

}
