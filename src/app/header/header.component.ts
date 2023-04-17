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
  
  visibleSidebar1:any;
  // isMenuOpen = false;

  // toggleMenu() {
  //   this.visibleSidebar1 =!this.visibleSidebar1;
  // }

  placement(){
    document.getElementById("placementChetana")?.scrollIntoView({behavior:"smooth"});
    document.getElementById("tranningProgram")?.scrollIntoView({behavior:"smooth"});
    document.getElementById("placementTracker")?.scrollIntoView({behavior:"smooth"});
  }

  visibleSidebar1: any;
}
