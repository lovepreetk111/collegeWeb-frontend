import { Component, Input, OnInit } from '@angular/core';
import { IcardData } from 'src/app/service/data';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {
@Input() cardData!: IcardData
  constructor() { }

  ngOnInit(): void {
  }
  

}
