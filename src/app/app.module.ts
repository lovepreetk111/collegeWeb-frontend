import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NoticesComponent } from './component/notices/notices.component';
import { Container1Component } from './component/container1/container1.component';
import { Container2Component } from './component/container2/container2.component';
import { Container3Component } from './component/container3/container3.component';
import { LeftImgRightTxt1Component } from './component/left-img-right-txt1/left-img-right-txt1.component';
import { TopImgBtmText1Component } from './component/top-img-btm-text1/top-img-btm-text1.component';
import { CardCarouselComponent } from './component/card-carousel/card-carousel.component';
import { ButtonCmp1Component } from './component/button-cmp1/button-cmp1.component';
import { ProfileCardComponent } from './component/profile-card/profile-card.component';
import { LeftImg1Component } from './component/left-img1/left-img1.component';
import { AccordianDropdwnComponent } from './component/accordian-dropdwn/accordian-dropdwn.component';
import {BannerCarouselComponent} from './component/banner-carousel/banner-carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NoticesComponent,
    Container1Component,
    Container2Component,
    Container3Component,
    LeftImgRightTxt1Component,
    TopImgBtmText1Component,
    CardCarouselComponent,
    ButtonCmp1Component,
    ProfileCardComponent,
    LeftImg1Component,
    AccordianDropdwnComponent,
    BannerCarouselComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
