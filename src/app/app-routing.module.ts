import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { placements } from '@popperjs/core';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CourseSub1Component } from './pages/course-sub1/course-sub1.component';
import { CourseComponent } from './pages/course/course.component';
import { EventSub1Component } from './pages/event-sub1/event-sub1.component';
import { EventComponent } from './pages/event/event.component';
import { ExaminationComponent } from './pages/examination/examination.component';
import { HomeComponent } from './pages/home/home.component';

import { NoticeComponent } from './pages/notice/notice.component';
import { PlacementComponent } from './pages/placement/placement.component';
import { ResearchComponent } from './research/research.component';

import { StudentSupportComponent } from './pages/student-support/student-support.component';
import { RegistrationFormComponent } from './dashboard-page/Auth/registration-form/registration-form.component';
import { LoginFormComponent } from './dashboard-page/Auth/login-form/login-form.component';
import { AdminloginComponent } from './dashboard-page/Auth/adminlogin/adminlogin.component';
import { YcmouComponent } from './dashboard-page/pages/courses/Distances learning/ycmou/ycmou.component';
import { PhdComComponent } from './dashboard-page/pages/courses/Doctoral programme/phd-com/phd-com.component';
import { McomComponent } from './dashboard-page/pages/courses/PG/mcom/mcom.component';
import { BmmcComponent } from './dashboard-page/pages/courses/CSFC/bmmc/bmmc.component';
import { BafComponent } from './dashboard-page/pages/courses/CSFC/baf/baf.component';
import { BmsComponent } from './dashboard-page/pages/courses/CSFC/bms/bms.component';
import { BscitComponent } from './dashboard-page/pages/courses/CSFC/bscit/bscit.component';
import { BcomComponent } from './dashboard-page/pages/courses/Degree college/bcom/bcom.component';
import { BaComponent } from './dashboard-page/pages/courses/Degree college/ba/ba.component';
import { SYJCComponent } from './dashboard-page/pages/courses/Junior college/syjc/syjc.component';
import { FYJCComponent } from './dashboard-page/pages/courses/Junior college/fyjc/fyjc.component';
import { DashboardComponent } from './dashboard-page/dashboard/dashboard.component';
import { AuthGuard } from './dashboard-page/Auth/auth.guard';
import { DCarouselComponent } from './dashboard-page/dashboard/DashboardHome/d-carousel/d-carousel.component';
import { DAboutchetanaComponent } from './dashboard-page/dashboard/DashboardHome/d-aboutchetana/d-aboutchetana.component';
import { DAcademicsComponent } from './dashboard-page/dashboard/DashboardHome/d-academics/d-academics.component';
import { DCampusComponent } from './dashboard-page/dashboard/DashboardHome/d-campus/d-campus.component';
import { DTestimonialsComponent } from './dashboard-page/dashboard/DashboardHome/d-testimonials/d-testimonials.component';
import { DashnoticeComponent } from './dashboard-page/dashnotice/dashnotice.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'about/:aboutpage',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'course',
    component: CourseComponent
  },
  {
    path: 'course/:coursename',
    component: CourseSub1Component
  },
  {
    path: 'event',
    component: EventComponent
  },
  {
    path: 'sc/:scpages',
    component: StudentSupportComponent
  },

  {
    path: 'event/:eventpage',
    component: EventSub1Component
  },
  {
    path: 'notice',
    component: NoticeComponent
  },
  {
    path: 'placement',
    component: PlacementComponent
  },
  {

    path: 'research',
    component: ResearchComponent
  },
  {
    path: 'examination',
    component: ExaminationComponent
  },
  {
    path:'auth/admin/register',component:RegistrationFormComponent ,
    
  },
  {
    path:'auth/admin/login',component:LoginFormComponent,
    
  },
  {
 
    path:'admindashboard',component:DashboardComponent ,
    data:{breadcrumb:'Dashboard'},
    canActivate:[AuthGuard],
    
    children: [
      // {
      //   path:'home',component:DCarouselComponent,
      //   data:{breadcrumb:'Home'}
      // },
      {
        path:'home/carousel',component:DCarouselComponent ,
        data:{breadcrumb:'Home/carousel'}
       
      },
      {
        path:'home/aboutchetana',component:DAboutchetanaComponent,
        data:{breadcrumb:'Home/About'}
    
      },
      {
        path:'home/academics',component:DAcademicsComponent,
        data:{breadcrumb:'Home/academics'}
       
      },
      {
        path:'home/campus',component:DCampusComponent,
        data:{breadcrumb:'Home/campus'}

       },
      {
        path:'home/testimonials',component:DTestimonialsComponent,
        data:{breadcrumb:'Home/testimonial'}

      },
      {
        path:'notice', component:DashnoticeComponent,
        data:{breadcrumb:'notice' }

      },
      {
        path:'page/courses', component:CourseComponent,
        data:{breadcrumb:'page/course'}
      },
      {
        path:'page/examination', component:ExaminationComponent,
        data:{breadcrumb:'page/examination'}
      },
      {
        path:'page/placement', component:PlacementComponent,
        data:{breadcrumb:'page/placement'}

      },
      {
        path:'page/research', component:ResearchComponent,
        data:{breadcrumb:'page/research'}
        
      },
      {
        path:'page/studentscorner', component:StudentSupportComponent,
        data:{breadcrumb:'page/studentscorner'}

      },
      // junior
      {
        path:'page/courses/junior/fyjc', component:FYJCComponent,
        data:{breadcrumb:'page/courses/junior/fyjc'}

      },
      {
        path:'page/courses/junior/syjc', component:SYJCComponent,
        data:{breadcrumb:'page/courses/junior/syjc'}

      },
      // degree
      {
        path:'page/courses/degree/ba', component:BaComponent,
        data:{breadcrumb:'page/courses/degree/ba'}
        
      },
      {
        path:'page/courses/degree/bcom', component:BcomComponent,
        data:{breadcrumb:'page/courses/degree/bcom'}

      },
    
      // sfc
      {
        path:'page/courses/sfc/bscit', component:BscitComponent,
        data:{breadcrumb:'page/courses/sfc/bscit'}

      },
      {
        path:'page/courses/sfc/bms', component:BmsComponent,
        data:{breadcrumb:'page/courses/sfc/bms'}

      },
      {
        path:'page/courses/sfc/baf', component:BafComponent,
        data:{breadcrumb:'page/courses/sfc/baf'}

      },
      {
        path:'page/courses/sfc/bmmc', component:BmmcComponent,
        data:{breadcrumb:'page/courses/sfc/bmmc'}
        
      },
    
      // PG
    
      {
        path:'page/courses/pg/mcom', component:McomComponent,
        data:{breadcrumb:'page/courses/pg/mcom'}

      },
    
      //doctoral 
    
      {
        path:'page/courses/doctoralprogramme/phd', component:PhdComComponent,
        data:{breadcrumb:'page/courses/doctoralprogramme/phd'}

      },
    
      //distance
    
      {
        path:'page/courses/distancelearning/ycmou', component:YcmouComponent,
        data:{breadcrumb:'page/courses/distancelearning/ycmou'}

      },
      {
        path:'auth/superadminlogin',component:AdminloginComponent ,
       
      },
      ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }