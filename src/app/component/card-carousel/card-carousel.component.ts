import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { ICardCarosuel, ICardCarosuelData } from 'src/app/service/data';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss']
})
export class CardCarouselComponent implements OnInit {
  @Input() cardData!:ICardCarosuelData;
  
  @ViewChild(NgbCarousel) ngbCarousal!: NgbCarousel;
  isCarousalVisible!: boolean;

  ngAfterViewInit(): void {
    this.isCarousalVisible = true;
  }

  nextSlide() {
    this.ngbCarousal.next();
  }

  previousSlide() {
    this.ngbCarousal.prev();
  }

  stepping(id: string) {
    this.ngbCarousal.select(id);
  }

  get activeSlideId() {
    if (this.ngbCarousal) {
      return this.ngbCarousal.activeId.split('-')[2];
    } else {
      return 0;
    }
  }

  get sliders() {
    if(this.ngbCarousal) return [...this.ngbCarousal.slides]
    else return  []
  }
  constructor() { }

  ngOnInit(): void {
  }

}
