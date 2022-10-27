import { Component, Input, OnInit } from '@angular/core';
import { ITestimonialSectionData } from 'src/app/service/data';

@Component({
  selector: 'app-container3',
  templateUrl: './container3.component.html',
  styleUrls: ['./container3.component.scss']
})
export class Container3Component implements OnInit {
  @Input() sectionData!:ITestimonialSectionData;
  constructor() { }
  ngOnInit(): void {
  }

}
