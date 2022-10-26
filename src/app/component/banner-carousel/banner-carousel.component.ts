import { Component, Input, OnInit } from '@angular/core';
import { IBannerCarosuelComponent } from 'src/app/service/data';

@Component({
  selector: 'app-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.scss']
})
export class BannerCarouselComponent implements OnInit {

  @Input() carousel2: IBannerCarosuelComponent[] = []
  constructor() { }
  i:any ='index';
  currentPosition = 0;
  
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
  }

  
}
