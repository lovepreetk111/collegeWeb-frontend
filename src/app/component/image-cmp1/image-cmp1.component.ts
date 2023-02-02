import { Component, Input, OnInit } from '@angular/core';
import { IaboutUs, IcoursesBanner } from 'src/app/service/data';

@Component({
  selector: 'app-image-cmp1',
  templateUrl: './image-cmp1.component.html',
  styleUrls: ['./image-cmp1.component.scss']
})
export class ImageCmp1Component implements OnInit {
  @Input() AboutBanner:IaboutUs[]=[]
  constructor() { }

  ngOnInit(): void {
  }

}
