import { Component, Input, OnInit } from '@angular/core';
import { IcourseDetail } from 'src/app/service/data';

@Component({
  selector: 'app-tab-view-cmp1',
  templateUrl: './tab-view-cmp1.component.html',
  styleUrls: ['./tab-view-cmp1.component.scss']
})
export class TabViewCmp1Component implements OnInit {
  @Input() details!: IcourseDetail;
  data1!: boolean
  data2!: boolean
  active = 1;
  ngOnInit(): void {
  }

}
