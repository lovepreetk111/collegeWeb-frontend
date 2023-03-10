import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NoticesComponent } from './component/notices/notices.component';
import { Container1Component } from './component/container1/container1.component';
import { Container2Component } from './component/container2/container2.component';
import { LeftImgRightTxt1Component } from './component/left-img-right-txt1/left-img-right-txt1.component';
import { TopImgBtmText1Component } from './component/top-img-btm-text1/top-img-btm-text1.component';
import { CardCarouselComponent } from './component/card-carousel/card-carousel.component';
import { ButtonCmp1Component } from './component/button-cmp1/button-cmp1.component';
import { ProfileCardComponent } from './component/profile-card/profile-card.component';
import { LeftImg1Component } from './component/left-img1/left-img1.component';
import { AccordianDropdwnComponent } from './component/accordian-dropdwn/accordian-dropdwn.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { BannerCarouselComponent } from './component/banner-carousel/banner-carousel.component';
import { ImageCmp1Component } from './component/image-cmp1/image-cmp1.component'
import { TextCmp1Component } from './component/text-cmp1/text-cmp1.component';
import { CircleImgLeftTxt1Component } from './component/circle-img-left-txt1/circle-img-left-txt1.component';
import { FormsModule } from '@angular/forms';
import { FormComponent1Component } from './component/form-component1/form-component1.component';
import { CourseComponent } from './pages/course/course.component';
import{ LeftImg2Component } from './component/left-img2/left-img2.component';
import { DetailsCard2Component } from './component/details-card2/details-card2.component';
import { DetailCard3Component } from './component/detail-card3/detail-card3.component';
import { DetialsCard1Component } from './component/detials-card1/detials-card1.component';
import { TabViewCmp1Component } from './component/tab-view-cmp1/tab-view-cmp1.component';
import { CourseSub1Component } from './pages/course-sub1/course-sub1.component';
import { EventComponent } from './pages/event/event.component';
import { EventSub1Component } from './pages/event-sub1/event-sub1.component';

import {ButtonModule} from 'primeng/button';
import { RightTxtLeftImg1Component } from './component/right-txt-left-img1/right-txt-left-img1.component';
import { StudentSupportComponent } from './pages/student-support/student-support.component';

// import {ButtonModule} from 'primeng/button';
import { SpeakersComponent } from './component/speakers/speakers.component';
import { NoticeComponent } from './pages/notice/notice.component';
import { PlacementComponent } from './pages/placement/placement.component';
import { InfocardComponent } from './component/infocard/infocard.component';
import { CardContainerComponent } from './component/card-container/card-container.component';
import { PlaceTableComponent } from './component/place-table/place-table.component';
import { CompanyPicComponent } from './component/company-pic/company-pic.component';
import { OurCampusComponent } from './component/our-campus/our-campus.component';
import {SidebarModule} from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import { ResearchComponent } from './research/research.component';
import { ExaminationComponent } from './pages/examination/examination.component';
import { LeftTxtRightTextComponent } from './component/left-txt-right-text/left-txt-right-text.component';
import { LoaderComponent } from './component/loader/loader.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NoticesComponent,
    Container1Component,
    Container2Component,
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
    ContactUsComponent,
    ImageCmp1Component,
    TextCmp1Component,
    CircleImgLeftTxt1Component,
    FormComponent1Component,
    CourseComponent,
    LeftImg2Component,
    DetailsCard2Component,
    DetailCard3Component,
    DetialsCard1Component,
    TabViewCmp1Component,
    CourseSub1Component,
    EventComponent,
    EventSub1Component,
    RightTxtLeftImg1Component,
    StudentSupportComponent,
    SpeakersComponent,
    NoticeComponent,
    PlacementComponent,
    InfocardComponent,
    CardContainerComponent,
    PlaceTableComponent,
    CompanyPicComponent,
    OurCampusComponent,
    ResearchComponent,
    ExaminationComponent,
    LeftTxtRightTextComponent,
    LoaderComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ButtonModule,
    SidebarModule,
    BrowserAnimationsModule,
    TableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
