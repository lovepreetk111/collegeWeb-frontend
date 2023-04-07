import { Component, Input, OnInit } from '@angular/core';
import { IAboutSectionData } from 'src/app/service/data';

@Component({
  selector: 'app-container1',
  templateUrl: './container1.component.html',
  styleUrls: ['./container1.component.scss']
})
export class Container1Component implements OnInit {
  @Input() mergedData!: IAboutSectionData
  constructor() { }

  ngOnInit(): void {
  }
}