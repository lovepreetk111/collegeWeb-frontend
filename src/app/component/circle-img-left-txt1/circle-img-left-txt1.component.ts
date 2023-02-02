import { Component, Input, OnInit } from '@angular/core';
import { AboutMain } from 'src/app/service/data';


@Component({
  selector: 'app-circle-img-left-txt1',
  templateUrl: './circle-img-left-txt1.component.html',
  styleUrls: ['./circle-img-left-txt1.component.scss']
})
export class CircleImgLeftTxt1Component implements OnInit {
@Input() About!:AboutMain;
  constructor() { }

  ngOnInit(): void {
  }

}
