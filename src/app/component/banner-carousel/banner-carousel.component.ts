import { Component, Input, OnInit, ViewChild, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { NgbCarousel, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { IBannerCarosuelComponent } from 'src/app/service/data';

@Component({
  selector: 'app-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.scss'],
  template: `
    <div class="carousel">
      <div class="carousel-inner">
        <div class="carousel-item" *ngFor="let slide of carousel2">
          <img class="d-block w-100" [src]="slide.image.url" [alt]="slide.image.alt">
          <div class="carousel-caption d-none d-md-block">
            <h5>{{slide.innerData?.header}}</h5>
            <p>{{slide.innerData?.text}}</p>
            <button>{{slide.innerData?.buttonText}}</button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class BannerCarouselComponent implements OnInit {
  @ViewChild(NgbCarousel) ngbCarousal!: NgbCarousel;
  @Input() carousel2: IBannerCarosuelComponent[] = []
  myData: any
  constructor(private cdRef: ChangeDetectorRef) {

  }



  i: any = 'index';
  currentPosition = 0;
  isCarouselVisible = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
  ngOnInit(): void {
    this.isCarouselVisible = true;
  }

  ngAfterViewInit() {
    this.cdRef.detectChanges();
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
    if (this.ngbCarousal) return [...this.ngbCarousal.slides]
    else return []
  }

}
