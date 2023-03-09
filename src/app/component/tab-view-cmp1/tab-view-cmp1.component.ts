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
 /*  table2 = this.details.table2
  table1 = this.details.table
  if(table2: null) {
    this.data1 == false
    this.data2 == true
  } */
}
