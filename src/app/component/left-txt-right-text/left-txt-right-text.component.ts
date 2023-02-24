import { Component, Input, OnInit } from '@angular/core';
import { Istudentsupport } from 'src/app/service/data';


@Component({
  selector: 'app-left-txt-right-text',
  templateUrl: './left-txt-right-text.component.html',
  styleUrls: ['./left-txt-right-text.component.scss']
})
export class LeftTxtRightTextComponent implements OnInit {
  @Input() details:Istudentsupport[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
