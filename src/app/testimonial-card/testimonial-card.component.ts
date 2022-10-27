import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss']
})
export class TestimonialCardComponent implements OnInit {
  @Input() cardData!: ITestimonialCardData;
  constructor() { }

  ngOnInit(): void {
  }

}

export interface ITestimonialCardData {
  comment: string;
  name: string;
  designation: string;
  companyName: string;
  profileUrl: string;
}