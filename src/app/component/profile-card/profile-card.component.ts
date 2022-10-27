import { Component, Input, OnInit } from '@angular/core';
import { ITestimonialCardData } from 'src/app/service/data';
@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  @Input() cardData!: ITestimonialCardData;
  constructor() { }

  ngOnInit(): void {
  }

}
