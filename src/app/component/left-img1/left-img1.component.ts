import { Component, Input, OnInit } from '@angular/core';
import { Ileftimg1 } from 'src/app/service/data';

@Component({
  selector: 'app-left-img1',
  templateUrl: './left-img1.component.html',
  styleUrls: ['./left-img1.component.scss']
})
export class LeftImg1Component implements OnInit {
  @Input() ImageData:Ileftimg1[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}

