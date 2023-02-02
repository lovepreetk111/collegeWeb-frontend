import { Component, Input, OnInit } from '@angular/core';
import { IleftimageRightTxt } from 'src/app/service/data';

@Component({
  selector: 'app-left-img-right-txt1',
  templateUrl: './left-img-right-txt1.component.html',
  styleUrls: ['./left-img-right-txt1.component.scss']
})
export class LeftImgRightTxt1Component implements OnInit {
  @Input() image!:IleftimageRightTxt;
  constructor() { }

  ngOnInit(): void {
  }
}
