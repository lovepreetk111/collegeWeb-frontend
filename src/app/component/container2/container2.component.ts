import { Component, Input, OnInit } from '@angular/core';
import { ITestimonialSectionData } from 'src/app/service/data';

@Component({
  selector: 'app-container2',
  templateUrl: './container2.component.html',
  styleUrls: ['./container2.component.scss']
})
export class Container2Component implements OnInit {
  @Input() sectionData!:ITestimonialSectionData;
  constructor() { }
  ngOnInit(): void {
  }

}
