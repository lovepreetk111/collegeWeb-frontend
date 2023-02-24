import { Component, Input, OnInit } from '@angular/core';
import {  ICardGroupData } from 'src/app/service/data';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.scss']
})
export class InfocardComponent implements OnInit {
  @Input() cardGroup!:ICardGroupData

  constructor() { }

  ngOnInit(): void {
  }

  currentPageIndex = 0;
    pages:Array<any> = [
      {
        pageName:'placement'
      }
    ]


}
