import { Component, Input, OnInit } from '@angular/core';
import { ITableComp } from 'src/app/service/data';

@Component({
  selector: 'app-place-table',
  templateUrl: './place-table.component.html',
  styleUrls: ['./place-table.component.scss']
})
export class PlaceTableComponent implements OnInit {
@Input() tableData!:ITableComp
  constructor() { }

  ngOnInit(): void {
  }

}
