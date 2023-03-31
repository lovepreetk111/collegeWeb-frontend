import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { IBannerCarosuelComponent } from 'src/app/service/data';

@Component({
  selector: 'app-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.scss']
})
export class BannerCarouselComponent implements OnInit {
  @ViewChild(NgbCarousel) ngbCarousal!: NgbCarousel;
  @Input() carousel2: IBannerCarosuelComponent[] = []
  constructor() { 
    
    console.log()
  }
  
  

  i:any ='index';
  currentPosition = 0;
  isCarousalVisible!: boolean;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const bannerCarousel: any = document.getElementById('carouselExampleCaptions')
    bannerCarousel.addEventListener('slide.bs.carousel', (e: any) => {
      console.log(e);
      this.currentPosition = e.to;
      console.log(this.currentPosition)
    })
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
