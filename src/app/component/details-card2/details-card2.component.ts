import { Component, Input, OnInit } from '@angular/core';
import { IDetailsCard2 } from 'src/app/service/data';

@Component({
  selector: 'app-details-card2',
  templateUrl: './details-card2.component.html',
  styleUrls: ['./details-card2.component.scss']
})
export class DetailsCard2Component implements OnInit {
  @Input() cardData: IDetailsCard2[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
