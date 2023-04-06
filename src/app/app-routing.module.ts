import { Component, NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CourseSub1Component } from './pages/course-sub1/course-sub1.component';
import { CourseComponent } from './pages/course/course.component';
import { EventSub1Component } from './pages/event-sub1/event-sub1.component';
import { EventComponent } from './pages/event/event.component';
import { ExaminationComponent } from './pages/examination/examination.component';
import { HomeComponent } from './home/home.component';

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
import { SuperadminComponent } from './dashboard-page/Auth/superadmin/superadmin.component';
import { AlumniComponent } from './pages/alumni/alumni.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: "pages", loadChildren: () => import('./pages/pages.module')
      .then(mod => mod.PagesModule)
  },
  {
    path: "admin", loadChildren: () => import('./dashboard-page/dashboard-page.module')
      .then(mod => mod.DashboardPageModule)
  },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }