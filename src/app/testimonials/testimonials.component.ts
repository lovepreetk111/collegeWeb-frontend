import { Component, Input, OnInit } from '@angular/core';
import { ITestimonialCardData } from '../testimonial-card/testimonial-card.component';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  @Input() sectionData!:ITestimonialSectionData;

  constructor() { }

  ngOnInit(): void {
  }

}
interface ITestimonialSectionData{
  title:string;
  description: string;
  cardsData: ITestimonialCardData[]


}

