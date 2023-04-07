import { Component, Input, OnInit } from '@angular/core';
import { InavbarConfig } from '../service/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() headerData: InavbarConfig[] = []
  constructor() { }

  ngOnInit(): void {
  }

  visibleSidebar1: any;
}
