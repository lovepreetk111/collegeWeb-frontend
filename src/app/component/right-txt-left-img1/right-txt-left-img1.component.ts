import { Component, Input, OnInit } from '@angular/core';
import { Istudentsupport } from 'src/app/service/data';

@Component({
  selector: 'app-right-txt-left-img1',
  templateUrl: './right-txt-left-img1.component.html',
  styleUrls: ['./right-txt-left-img1.component.scss']
})
export class RightTxtLeftImg1Component implements OnInit {
@Input() details:Istudentsupport[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
