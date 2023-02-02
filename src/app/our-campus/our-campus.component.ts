import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ICardCarosuel } from '../service/data';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-our-campus',
  templateUrl: './our-campus.component.html',
  styleUrls: ['./our-campus.component.scss']
})
export class OurCampusComponent implements OnInit {
  @Input() cardConfig!:ICardCarosuel;
  constructor() { }

  ngOnInit(): void {
  }


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

}
