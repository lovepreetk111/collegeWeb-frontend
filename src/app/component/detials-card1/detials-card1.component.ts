import { Component, Input, OnInit } from '@angular/core';
import { IDetailCardInfo } from 'src/app/service/data';

@Component({
  selector: 'app-detials-card1',
  templateUrl: './detials-card1.component.html',
  styleUrls: ['./detials-card1.component.scss']
})
export class DetialsCard1Component implements OnInit {
@Input() detailCardConfig:IDetailCardInfo[]=[]
  constructor() { }

  ngOnInit(): void {
  }

}
