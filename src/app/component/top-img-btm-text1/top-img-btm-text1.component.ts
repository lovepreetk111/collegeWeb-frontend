import { Component, Input, OnInit } from '@angular/core';
import { IPictureComponentImage } from 'src/app/service/data';

@Component({
  selector: 'app-top-img-btm-text1',
  templateUrl: './top-img-btm-text1.component.html',
  styleUrls: ['./top-img-btm-text1.component.scss']
})
export class TopImgBtmText1Component implements OnInit {
  @Input() images:IPictureComponentImage[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
