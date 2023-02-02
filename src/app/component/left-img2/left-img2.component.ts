import { Component, Input, OnInit } from '@angular/core';
import { Ileftimg, Ileftimg1 } from 'src/app/service/data';
// import { Ileftimg } from 'src/app/service/data';

@Component({
  selector: 'app-left-img2',
  templateUrl: './left-img2.component.html',
  styleUrls: ['./left-img2.component.scss']
})
export class LeftImg2Component implements OnInit {
@Input() LeftImage:Ileftimg[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
