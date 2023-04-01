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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import {DialogModule} from 'primeng/dialog';
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
import { ModalComponent } from './component/modal/modal.component';

import { AlumniComponent } from './pages/alumni/alumni.component';

import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardComponent } from './dashboard-page/dashboard/dashboard.component';
import { DashdataTableComponent } from './dashboard-page/dashdata-table/dashdata-table.component';
import { DashdisplayComponent } from './dashboard-page/dashdisplay/dashdisplay.component';
import { DashnoticeComponent } from './dashboard-page/dashnotice/dashnotice.component';
import { CoursesComponent } from './dashboard-page/pages/courses/courses.component';
import { BaComponent } from './dashboard-page/pages/courses/Degree college/ba/ba.component';
import { BcomComponent } from './dashboard-page/pages/courses/Degree college/bcom/bcom.component';
import { YcmouComponent } from './dashboard-page/pages/courses/Distances learning/ycmou/ycmou.component';
import { PhdComComponent } from './dashboard-page/pages/courses/Doctoral programme/phd-com/phd-com.component';
import { FYJCComponent } from './dashboard-page/pages/courses/Junior college/fyjc/fyjc.component';
import { SYJCComponent } from './dashboard-page/pages/courses/Junior college/syjc/syjc.component';
import { McomComponent } from './dashboard-page/pages/courses/PG/mcom/mcom.component';
import { BscitComponent } from './dashboard-page/pages/courses/CSFC/bscit/bscit.component';
import { BafComponent } from './dashboard-page/pages/courses/CSFC/baf/baf.component';
import { BmsComponent } from './dashboard-page/pages/courses/CSFC/bms/bms.component';
import { BmmcComponent } from './dashboard-page/pages/courses/CSFC/bmmc/bmmc.component';
import { StudentscornerComponent } from './dashboard-page/pages/studentscorner/studentscorner.component';
import { HttpClientModule } from '@angular/common/http';

import { LoginFormComponent } from './dashboard-page/Auth/login-form/login-form.component';
import { RegistrationFormComponent } from './dashboard-page/Auth/registration-form/registration-form.component';
import { AdminloginComponent } from './dashboard-page/Auth/adminlogin/adminlogin.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { DAboutchetanaComponent } from './dashboard-page/dashboard/DashboardHome/d-aboutchetana/d-aboutchetana.component';
import { DAcademicsComponent } from './dashboard-page/dashboard/DashboardHome/d-academics/d-academics.component';
import { DCampusComponent } from './dashboard-page/dashboard/DashboardHome/d-campus/d-campus.component';
import { DCarouselComponent } from './dashboard-page/dashboard/DashboardHome/d-carousel/d-carousel.component';
import { DTestimonialsComponent } from './dashboard-page/dashboard/DashboardHome/d-testimonials/d-testimonials.component';
import { SuperadminComponent } from './dashboard-page/Auth/superadmin/superadmin.component';

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
    ModalComponent,
    LoaderComponent,
    AlumniComponent
    DashboardPageComponent,
    DashboardComponent,
    DashdataTableComponent,
    DashdisplayComponent,
    DashnoticeComponent,
    CoursesComponent,
    BaComponent,
    BcomComponent,
    YcmouComponent,
    PhdComComponent,
    FYJCComponent,
    SYJCComponent,
    McomComponent,
    BscitComponent,
    BafComponent,
    BmsComponent,
    BmmcComponent,
    StudentscornerComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    AdminloginComponent,
    DAboutchetanaComponent,
    DAcademicsComponent,
    DCampusComponent,
    DCarouselComponent,
    DTestimonialsComponent,
    SuperadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ButtonModule,
    SidebarModule,
    BrowserAnimationsModule,
    TableModule,
    DialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ConfirmDialogModule,

    
  ],
  providers: [ConfirmationService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
