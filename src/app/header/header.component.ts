import { Component, Input, OnInit } from '@angular/core';
import { INavbarData } from '../service/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Input() headerData:INavbarData[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
